import React from 'react'
import { useContext } from 'react'
import classes from "./cart-bill.module.css"
import ShoppingCartContext from '../../store/shopping-cart-context'

const CartBill = () => {

    const ShoppingCartCtx = useContext(ShoppingCartContext);

    const { cart } = ShoppingCartCtx;
    const totalPrice = ShoppingCartCtx.totalPrice();

    return (
        <div className={classes["cart-bill"]}>
            <div className={classes["cart-bill-header"]}>Your Bill</div>
            <div className={classes["cart-bill-content"]}>
                <div className={classes["cart-bill-item-container"]}>
                    {
                        cart.map((item) => (
                            <div className={classes["cart-bill-item"]} key={item.shoesid}>
                                <h3 className={classes.h3}>{item.name}</h3>
                                <p>
                                    {`$${item.price}`}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className={classes["total-price"]}>
                    <p>Total</p>
                    <p>{totalPrice}</p>
                </div>
            </div>
            <button className={classes["check-out"]} >
                Checkout
            </button>
        </div>
    )
}

export default CartBill