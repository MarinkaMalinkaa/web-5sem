import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "./redux/cart/reducer1";


export function VoucherItem(props){


    const {service} = props;
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(service));


    };


    return (
        <div>
            <div className={"block-level"}>
                <h2><Link to={`/voucher/${service.pk}`}>{service.themes}</Link></h2>
                <img src={"/image/"+service.img} alt={"image:"+service.img} width={"250px"} className={"image"}/>
                <div>Дата: {service.date}</div>
                <div> {service.price} руб. <button className="button" onClick={handleClick} >  В корзину </button></div>

            </div>
        </div>)
}

export default VoucherItem;