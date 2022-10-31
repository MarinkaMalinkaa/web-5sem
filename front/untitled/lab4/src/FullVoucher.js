import {Link, useParams} from "react-router-dom";

const FullVoucher = ({voucher}) => {
    const { themes } = useParams();

    return (
            <div>
                {voucher
                    .filter(voucher => voucher.themes === themes)
                    .map(voucher =>
                    <div key={voucher.id}>
                        <ul>
                            <li>
                                <Link to="/">Путевки</Link> / <Link to={`/${voucher.themes}`}>{voucher.themes}</Link>
                            </li>
                        </ul>

                        <h1>{voucher.themes}</h1>
                        Дата: {voucher.date}
                        <br/>Длительность: {voucher.duration}
                        <br/>Описание: {voucher.description}
                        <br/>Цена: {voucher.price}
                    </div>
                )}
            </div>
    )
}

export default FullVoucher;