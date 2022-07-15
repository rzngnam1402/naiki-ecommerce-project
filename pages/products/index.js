import React from 'react'
import useSWR from 'swr'
import ProductsBanner from '../../components/products/products-banner';
import ProductsHeader from '../../components/products/products-header';
import ProductsList from '../../components/products/products-list';

const Products = (props) => {
    const { data, error } = useSWR('api/products', (url) => fetch(url).then(res => res.json()));
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    console.log(data);

    return (
        <>
            <ProductsBanner />
            <ProductsHeader />
            <ProductsList products={data.sort(() => Math.random() - 0.5)} />
        </>
    )
}

export default Products