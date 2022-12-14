import React, {Component, useState, useEffect, useReducer} from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from './ButtonComponent';
import Status from './Status';
import reducer from "./reducer";
import Header from "./header";
import {increm} from "./actions";
import './css/bag.css';
import VoucherItem from "./VoucherItem";


function Vouchers() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    const [state, dispatch] = useReducer(reducer, {
        priceCount: 0
    });

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/voucher/?price_min=`)
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


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка</div>;
    } else {
        return (
            <div>
                <Header  />

                <ul>
                        <li>
                            <Link to ={`/`}>Путевки </Link>
                        </li>
                    </ul>

                {items.map(item => <VoucherItem service = {item} key={item.pk} />)}
                <h1>{value}</h1>
            </div>

        );
    }
}


export default Vouchers;
