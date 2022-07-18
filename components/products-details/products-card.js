import React from 'react'
import classes from './products-card.module.css'

const ProductsCard = (props) => {
    const { data } = props;

    const detail = data[0];

    return (
        <div className={classes.container}>
            <h2>{detail.Brand}</h2>
        </div>
    )
}

export default ProductsCard