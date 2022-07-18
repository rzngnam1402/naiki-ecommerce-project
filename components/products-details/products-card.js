import React, { useEffect } from 'react'
import classes from './products-card.module.css'
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

    const size = getSize(detail.Size);
    let sizeRange = new Array(size.lastSizeRange - size.firstSizeRange || 0)
    if (size !== -1) {
        let num = size.firstSizeRange;
        for (let j = 0; j <= size.lastSizeRange - size.firstSizeRange; j++) {
            sizeRange[j] = num;
            num++;
        }
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [2000])

    return (
        <HideOn atHeight height={2345}>
            <div id="hide" data-aos="fade-up" className={classes.container}>
                <h2 className={classes.brand}>{detail.Brand}</h2>
                <h2 className={classes.name}>{detail.Name}</h2>
                <h3 className={classes.type}>{detail.Gender} {detail.Type}</h3>
                <p className={classes.price}>{`$${detail.Price}.00`}</p>

                {size === -1 ? (
                    <>
                        <p className={classes.size}>Selected size: </p>
                        <select className={classes.select}>
                            <option value="0">{detail.Size}</option>
                        </select>
                    </>
                ) : (
                    <>
                        <p className={classes.size}>Selected size: </p>
                        <select className={classes.select}>
                            {sizeRange.map((size, index) => (
                                <option value={index}>{size}</option>
                            ))}
                        </select>
                    </>
                )}
                <br />
                <button className={classes.button}>Add to cart</button>
            </div>
        </HideOn>
    )
}

export default ProductsCard