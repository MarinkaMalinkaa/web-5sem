import React, {useEffect, useState} from "react";

function TimingService(props) {
    const {items} = props;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [timing, setTime] = useState([]);
    const [themes, setService] = useState([]);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {

        fetch(`http://127.0.0.1:8000/voucher/${items.voucher_id}/`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTime(result);
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

                <ul >

                    <div>
                        <h1>{timing.themes}</h1>
                        <h3>{timing.price} руб</h3>

                    </div>

                </ul>
            </div>

        );
    }
}
export default TimingService;