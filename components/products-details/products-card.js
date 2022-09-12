import React, { useEffect, useContext } from 'react'
import classes from './products-card.module.css'
import ShoppingCartContext from '../../store/shopping-cart-context'
import Aos from 'aos'
import "aos/dist/aos.css"
import { HideOn } from 'react-hide-on-scroll'

const getSize = (sizeString) => {
    const firstSizeRange = 0;
    const lastSizeRange = 0;

    if (sizeString.length > 2) {
        firstSizeRange = Number(sizeString[0]);
        if (sizeString[4])
            lastSizeRange = Number(sizeString[3] + sizeString[4]);
        else
            lastSizeRange = Number(sizeString[3])

        return {
            firstSizeRange: firstSizeRange,
            lastSizeRange: lastSizeRange
        }
    }
    else
        return -1;
}

const ProductsCard = (props) => {
    const { data } = props;

    const detail = data[0];

    //render the sizeRange 
    const shoes_size = getSize(detail.size);
    let sizeRange = new Array(shoes_size.lastSizeRange - shoes_size.firstSizeRange || 0)
    if (shoes_size !== -1) {
        let num = shoes_size.firstSizeRange;
        for (let j = 0; j <= shoes_size.lastSizeRange - shoes_size.firstSizeRange; j++) {
            sizeRange[j] = num;
            num++;
        }
    }

    const ShoppingCartCtx = useContext(ShoppingCartContext);
    function onSubmitHandler(event) {
        event.preventDefault();
        ShoppingCartCtx.addToCart(detail);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <HideOn atHeight height={2345}>
            <div id="hide" data-aos="fade-up" className={classes.container}>
                <h2 className={classes.brand}>{detail.brand}</h2>
                <h2 className={classes.name}>{detail.name}</h2>
                <h3 className={classes.type}>{detail.gender} {detail.type}</h3>
                <p className={classes.price}>{`$${detail.price}.00`}</p>

                {shoes_size === -1 ? (
                    <>
                        <p className={classes.size}>Selected size: </p>
                        <select className={classes.select}>
                            <option value="0">{detail.size}</option>
                        </select>
                    </>
                ) : (
                    <>
                        <p className={classes.size}>Selected size: </p>
                        <select className={classes.select}>
                            {sizeRange.map((size, index) => (
                                <option key={index} value={index}>{size}</option>
                            ))}
                        </select>
                    </>
                )}
                <br />
                <button onClick={onSubmitHandler} className={classes.button}>Add to cart</button>
            </div>
        </HideOn>
    )
}

export default ProductsCard