import React from 'react'
import ProductsItem from './products-item'
import classes from './products-list.module.css'

const ProductsList = (props) => {

    const { products } = props

    return (
        <>
            <ul className={classes.list}>
                {products.map(product => 
                    <ProductsItem
                        ShoesID={product.ShoesID}
                        Name={product.Name}
                        Brand={product.Brand}
                        Size={product.Size}
                        Color={product.Color}
                        Type={product.Type}
                        Gender={product.Gender}
                        Price={product.Price}
                        ImageLink={product.Image}
                    />
                )
                }
            </ul>
        </>
    )
}

export default ProductsList