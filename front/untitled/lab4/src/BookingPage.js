import React, {useEffect, useState} from "react";

import Header from "./header";
import ItemBooking from "./ItemBooking";


export function BookingPage(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [booktime, setTime] = useState([])



    let [cartOpen, setCartOpen] = useState(false);


    useEffect(() => {
        fetch("http://127.0.0.1:8000/basket/")
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



    return (
        <div >
            <div>
                <Header />
            </div>
            <div>
                {items.map(item => <ItemBooking service = {item} key={item.pk} />)}
            </div>


        </div>
    );
}

export default BookingPage;