import React, {useEffect, useState} from "react";
import Timingservice from "./timingservice";

import Header from "./header";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./cartItem";
import {useParams} from "react-router-dom";
export function OrderItem(props) {
    const {service} = props;
    const {pk} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const dispatch = useDispatch;

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/basket/${service.pk}/`)
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

    const remove = () => {
        const request = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        fetch(`http://127.0.0.1:8000/basket/${service.pk}/`, request)
            .then(response => {
                setItems(response)
            })

    }
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <Timingservice items={ items}/>
                <button className="button" onClick={remove}>Удалить</button>
            </div>
        );
    }
}

export default OrderItem;