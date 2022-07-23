import React from 'react'
import classes from "./cart-bill.module.css"

const CartBill = () => {
    return (
        <div className={classes["cart-bill"]}>
            <div className={classes["cart-bill-header"]}>Your Bill</div>
            <div className={classes["cart-bill-content"]}>
                <div className={classes["cart-bill-item-container"]}>

                </div>
                <div className={classes["total-price"]}>
                    <p>Total</p>
                </div>
            </div>
            <button className={classes["check-out"]} >
                Order
            </button>
        </div>
    )
}

export default CartBill