import React from 'react'
import classes from './products.module.css'
import useSWR from 'swr'
import ProductsBanner from '../../components/products/products-banner';
import ProductsHeader from '../../components/products/products-header';

const Products = (props) => {
    const { data, error } = useSWR('api/products', (url) => fetch(url).then(res => res.json()));
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    console.log(data);

    return (
        <>
            <ProductsBanner />
            <ProductsHeader />
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
        </>
    )
}

export default Products