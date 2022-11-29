import React, {useEffect, useState} from "react";

import Header from "./header";
import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";
import CartItem from "./cartItem";
import {Link} from "react-router-dom";
export function OrderPage(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [booktime, setTime] = useState([]);
    const [service1, setService] = useState([]);



    let [cartOpen, setCartOpen] = useState(false);

    const totalPrice = items.reduce((acc, service ) => acc += service.price, 0);

    useEffect(() => {

        fetch(`http://127.0.0.1:8000/basket/`)
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

    const booking = (items) => {
        const request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({time1: booktime.pk, user_id:1, voucher_id: items.pk})
        }
        fetch("http://127.0.0.1:8000/basket/", request);
    };

    const handleClick = (items)=>{
        items.map(ser => booking(ser));
    }


    return (
        <div >
            <div>
                <Header />
                <ul>
                    <li>
                        <Link to="/voucher">Путевки</Link> / <Link to={`/order`}>Корзина </Link>
                    </li>
                </ul>
            </div>

            <div>
                {items.map( item => <OrderItem key={ item.pk} service={item}/>)}
            </div>

            <div><button className="button"  onClick={()=>{handleClick(items)}} >Покупаю  </button></div>



        </div>
    );
}

export default OrderPage;