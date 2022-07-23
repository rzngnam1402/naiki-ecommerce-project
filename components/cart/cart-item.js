import React, { useContext } from 'react'
import Image from "next/image";
import classes from './cart-item.module.css'

import ShoppingCartContext from "../../store/shopping-cart-context";


const CartItem = (props) => {
    const ShoppingCartCtx = useContext(ShoppingCartContext);

    const { data } = props

    function remove() {
        ShoppingCartCtx.removeProduct(data.ShoesID);
    }

    return (
        <li className={classes["cart-item"]}>
            <div className={classes["item-name"]}>
                <img className={classes.img} src={data.Image + ".jpg"} alt={data.Name} />
                <h2>{data.Name}</h2>
            </div>
            <p className={classes["item-price"]}>
                {`$${data.Price}`}
            </p>
            <p className={classes["item-price"]}>
                {data.Price / data.Price}
            </p>
            <div className={classes["item-price"]}>
                {`$${data.Price}`}
            </div>
            <button className={classes["delete-item"]} onClick={remove}>
                X
            </button>
        </li>
    )
}

export default CartItem