import React, { useEffect } from 'react'
import classes from './brands-images.module.css'
import Link from 'next/dist/client/link'
import Aos from 'aos'
import "aos/dist/aos.css"

const BrandsImages = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, [])

    const { brands } = props

    return (
        <>
            <div className={classes.gallery}>
                <figure data-aos="fade-left" className={`${classes.gallery__item} ${classes.gallery__item_1}`}>
                    <Link href="./brands/Converse">
                        <img src={`/images/brands_logo/${brands[3]}.jpg`} className={classes["gallery__img"]} alt="Image 1" />
                    </Link>
                </figure>
                <figure data-aos="fade-down" className={`${classes.gallery__item} ${classes.gallery__item_2}`}>
                    <Link href="./brands/Adidas">
                        <img src={`/images/brands_logo/${brands[0]}.jpg`} className={classes["gallery__img"]} alt="Image 2" />
                    </Link>
                </figure>
                <figure data-aos="fade-left" className={`${classes.gallery__item} ${classes.gallery__item_3}`}>
                    <Link href="./brands/Comme des Garcons">
                        <img src={`/images/brands_logo/${brands[2]}.jpg`} className={classes["gallery__img"]} alt="Image 3" />
                    </Link>
                </figure>
                <figure data-aos="fade-right" className={`${classes.gallery__item} ${classes.gallery__item_4}`}>
                    <Link href="./brands/Nike">
                        <img src={`/images/brands_logo/${brands[4]}.jpg`} className={classes["gallery__img"]} alt="Image 4" />
                    </Link>
                </figure>
                <figure data-aos="fade-up" className={`${classes.gallery__item} ${classes.gallery__item_5}`}>
                    <Link href="./brands/Adidas Y-3">
                        <img src={`/images/brands_logo/${brands[1]}.jpg`} className={classes["gallery__img"]} alt="Image 5" />
                    </Link>
                </figure>
            </div >
        </>
    )
}

export default BrandsImages