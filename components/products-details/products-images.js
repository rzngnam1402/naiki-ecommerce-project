import React, { useEffect } from 'react'
import Image from 'next/image'
import classes from './products-images.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const ProductsImages = (props) => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [500])

    const { id } = props;

    return (
        <>
            <div className={classes.container}>
                <Image data-aos="fade-right" className={classes.img} src={`/images/ImageDetails/${id}/0.jpg`} width={1200} height={1200} />
                <Image data-aos="fade-right" className={classes.img} src={`/images/ImageDetails/${id}/1.jpg`} width={1200} height={1200} />
                <Image data-aos="fade-right" className={classes.img} src={`/images/ImageDetails/${id}/2.jpg`} width={1200} height={1200} />
                <Image data-aos="fade-right" className={classes.img} src={`/images/ImageDetails/${id}/3.jpg`} width={1200} height={1200} />
            </div>
        </>
    )
}

export default ProductsImages