import React from 'react'
import Image from 'next/image'
import classes from './products-images.module.css'

const ProductsImages = (props) => {
    const { id } = props;

    return (
        <>
            <div className={classes.container}>
                <Image className={classes.img} src={`/images/ImageDetails/${id}/0.jpg`} width={1200} height={1200} />
                <Image className={classes.img} src={`/images/ImageDetails/${id}/1.jpg`} width={1200} height={1200} />
                <Image className={classes.img} src={`/images/ImageDetails/${id}/2.jpg`} width={1200} height={1200} />
                <Image className={classes.img} src={`/images/ImageDetails/${id}/3.jpg`} width={1200} height={1200} />
            </div>
        </>
    )
}

export default ProductsImages