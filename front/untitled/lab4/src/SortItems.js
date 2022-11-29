import React, {useEffect, useReducer, useState} from "react";
import reducer from "./reducer";
import {increm} from "./actions";
import { Link } from "react-router-dom";

import {useDispatch} from "react-redux";
import Status from "./Status";
import { FaDog } from "react-icons/fa";
import Header from "./header";
import {setItemInCart} from "./redux/cart/reducer1";
import ServiceItem from "./VoucherItem";


function SortItems(props) {
    const {min, max, title} = props;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [value,setValue] = useState('');
    const [order, setState] = useState([]);
    const [sort1, setSort] = useState([]);


    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/voucher/?price_min=${min}&price_max=${max}&themes=${title}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(items));
    };



    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                {items.map(item => (
                    <div key={item.pk}>
                        <div className={"block-level"}>
                             <h2><Link to={`/voucher/${item.pk}`}>{item.themes}</Link></h2>
                             <img src={"/image/"+item.img} alt={"image:"+item.img} width={"250px"} className={"image"}/>
                             <div>Дата: {item.date}</div>
                            <div> {item.price} руб. <button className="button" onClick={handleClick} >  В корзину </button></div>

                        </div>


                    </div>
                ))}

            </div>


        );
    }
}
export default SortItems;