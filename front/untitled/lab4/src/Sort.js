import React, {useEffect, useState} from "react";
import Header from "./header";
import SortItems from "./SortItems";
import './css/bag.css';
import {Link} from "react-router-dom";


function Sort() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ setItems] = useState([]);
    const [value,setValue] = useState('');
    const [value1,setValue1] = useState('');
    const [value2,setValue2] = useState('');
    let [click, setclick]= useState(false);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/voucher/?price_min=${value}`)
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
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <Header  />
                <ul>
                    <li>
                        <Link to="/voucher">Путевки</Link>
                    </li>
                </ul>
                <div>
                    <input type ="text"
                           placeholder= "Введите min "
                           onChange ={(event) => setValue(event.target.value)}/>
                </div>
                <div>
                    <input type ="text"
                           placeholder= "Введите max "
                           onChange ={(event) => setValue1(event.target.value)}/>
                </div>
                <div>
                    <input type ="text"
                           placeholder= "Введите название "
                           onChange ={(event) => setValue2(event.target.value)}/>

                </div>

                <button className="button" onClick ={() => setclick(click = !click)}> Найти </button>

                {click && (
                        <div>
                            <SortItems min ={value} max ={value1} title ={value2}/>

                        </div>
               )}

                {!click && (
                    <div>
                        <SortItems min ={value} max ={value1} title ={value2}/>

                    </div>
                )}



            </div>


        );
    }
}
export default Sort;