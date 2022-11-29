import React, {useEffect, useReducer, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import Header from "./header";
import {useDispatch} from "react-redux";
import {setItemInCart} from "./redux/cart/reducer1";

function VoucherInf () {
    const {pk} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/voucher/${pk}/`)
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
        dispatch(setItemInCart(items))
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <Header  />
                <ul>
                    <li>
                        <Link to="/voucher">Путевки</Link> / <Link to={`/voucher/${items.pk}`}>{items.themes}</Link>
                    </li>
                </ul>
                <info>
                    <h1>{items.themes}</h1>
                    <ul>
                        <div className={"block-level"}>
                            <a>{items.themes}</a>
                            <img src={"/image/"+items.img} alt={"image:"+items.img} width={"250px"} className={"image"}/>
                            <div>Дата: {items.date}</div>
                            <div>Длительность: {items.duration}</div>
                            <div>Описание: {items.description}</div>
                            <div>Цена: {items.price} руб. <ButtonComponent func = {handleClick} /></div>

                        </div>
                    </ul>
                </info>

            </div>

        );
    }
}
export default VoucherInf ;