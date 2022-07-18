import React from 'react'
import classes from './products-item.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ProductsItem = (props) => {
    const {
        ShoesID,
        Name,
        Brand,
        Size,
        Color,
        Type,
        Gender,
        Price,
        ImageLink,
    } = props;

    return (
        <div className={classes.item__container}>
            <Link href={`/products/${ShoesID}`}>
                <li className={classes.item} key={ShoesID}>
                    <div >
                        <Image className={classes.image} src={ImageLink + ".jpg"} alt={Name} width={280} height={280} />
                    </div>
                    <div className={classes.content__container}>
                        <p className={classes.content__brand}>{Brand}</p>
                        <a className={classes.content__name}>{Name}</a>
                        <p className={classes.content__price}>{"$" + Price + ".00"}</p>
                    </div>
                </li>
            </Link>
        </div >
    )
}

export default ProductsItem