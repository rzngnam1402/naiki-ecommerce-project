import React, { useEffect } from 'react'
import classes from './products-images.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const ProductsImages = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const { id } = props;

    return (
        <>
            <div className={classes.container}>
                <picture>
                    <img alt={`/images/ImageDetails/${id}/0.jpg`} data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/0.jpg`} />
                    <img alt={`/images/ImageDetails/${id}/1.jpg`} data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/1.jpg`} />
                    <img alt={`/images/ImageDetails/${id}/2.jpg`} data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/2.jpg`} />
                    <img alt={`/images/ImageDetails/${id}/3.jpg`} data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/3.jpg`} />
                </picture>
            </div>
        </>
    )
}

export default ProductsImages