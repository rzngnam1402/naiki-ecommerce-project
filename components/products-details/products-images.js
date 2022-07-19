import React, { useEffect } from 'react'
import classes from './products-images.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const ProductsImages = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [2000])

    const { id } = props;

    return (
        <>
            <div className={classes.container}>
                <img data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/0.jpg`} />
                <img data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/1.jpg`} />
                <img data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/2.jpg`} />
                <img data-aos="fade-right" data-aos-delay="200" className={classes.img} src={`/images/ImageDetails/${id}/3.jpg`} />
            </div>
        </>
    )
}

export default ProductsImages