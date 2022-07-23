import React from 'react'
import classes from "./cart-list.module.css"

const CartList = () => {
    return (
        <>
            <ul className={classes.cart__list}>
                <li className={classes.cart__header}>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Delete</p>
                </li>
                <h2 className={classes.empty}>
                    There are not any products yet !!~
                </h2>
            </ul>
        </>
    )
}

export default CartList