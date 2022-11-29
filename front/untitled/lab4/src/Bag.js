import React from "react";
export function Order(props){
    const {item} = props;
    return (
        <div>
            <p>{item.themes}</p>
            <p>{item.price}</p>

        </div>);
}

export default Order;