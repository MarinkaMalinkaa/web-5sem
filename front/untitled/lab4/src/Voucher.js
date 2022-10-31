import {Link} from "react-router-dom";

function Voucher(props) {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Путевки</Link>
                </li>
            </ul>
            <h1>Путевки</h1>
            <ul>
                {props.voucher.map(el =>
                    <li key={el.id}>
                        <Link to={`/${el.themes}`}>{el.themes}</Link>
                        <br/>Дата: {el.date}
                    </li>)}
            </ul>
        </div>
    );
};

export default Voucher;