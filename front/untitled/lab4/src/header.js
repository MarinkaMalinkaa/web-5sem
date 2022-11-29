import React, {useCallback, useEffect, useReducer, useState} from "react";
import {increm} from "./actions";
import { Link } from "react-router-dom";
import {BiCartAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CartItem from "./cartItem";

export default function Header(props){
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, service ) => acc += service.price, 0);
    let [cartOpen, setCartOpen] = useState(false);
   const navigate = useNavigate();
    const [booktime, setTime] = useState([])

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
        cartOpen = false;
        navigate('/order');
    }
    const handleClickk = useCallback(() => {

    }, [navigate]);


    return(
        <header>
            <div>

                <ul>
                    <li>
                        <Link to ={`/sort`}>Поиск</Link>
                    </li>
                </ul>

                    <BiCartAlt size={25} onClick ={() => setCartOpen(cartOpen = !cartOpen)} className = 'booking'/>

                    {cartOpen && (
                        <div className= "book-card">
                            <div>
                                <BiCartAlt size={25} onClick ={() => setCartOpen(cartOpen = !cartOpen)} className = 'booking'/>

                                {
                                    items.length >0 ? items.map( service =>
                                            <CartItem key={ service.themes}
                                                     price ={ service.price}
                                                      title={service.themes}
                                                      id = {service.pk}/>)
                                        : 'Корзина пуста'
                                }
                            </div>
                            <div>
                                {
                                    items.length > 0 ?
                                        <div>
                                            <span>Итого: </span>
                                            <span>{totalPrice} руб </span>

                                            <button className="button" onClick={()=>{handleClick(items)}}> Оформить </button>
                                        </div>
                                        :null
                                }
                            </div>

                        </div>
                    )}
                    <span className = 'booking'>{totalPrice} руб.</span>
            </div>
        </header>
    )
}
