import React from 'react'
import classes from './brands-images.module.css'

const BrandsImages = (props) => {

    const { brands } = props

    console.log(brands);
    return (
        <>
            {/* <div className={classes.container} >
                {brands.map(brand => (
                    <img src={`/images/brands_logo/${brand}.jpg`} alt="" />
                ))}
            </div> */}
            <div className={classes.gallery}>
                <figure className={`${classes.gallery__item} ${classes.gallery__item_1}`}>
                    <img src="/images/brands_logo/Converse.jpg" className={classes["gallery__img"]} alt="Image 1" />
                </figure>
                <figure className={`${classes.gallery__item} ${classes.gallery__item_2}`}>
                    <img src="/images/brands_logo/Adidas.jpg" className={classes["gallery__img"]} alt="Image 2" />
                </figure>
                <figure className={`${classes.gallery__item} ${classes.gallery__item_3}`}>
                    <img src="/images/brands_logo/Comme des Garcons.jpg" className={classes["gallery__img"]} alt="Image 3" />
                </figure>
                <figure className={`${classes.gallery__item} ${classes.gallery__item_4}`}>
                    <img src="/images/brands_logo/Nike.jpg" className={classes["gallery__img"]} alt="Image 4" />
                </figure>
                <figure className={`${classes.gallery__item} ${classes.gallery__item_5}`}>
                    <img src="/images/brands_logo/Adidas Y-3.jpg" className={classes["gallery__img"]} alt="Image 5" />
                </figure>
            </div>

        </>
    )
}

export default BrandsImages