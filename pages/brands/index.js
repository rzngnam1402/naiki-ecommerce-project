import React from 'react'
import useSWR from 'swr'
import BrandsImages from '../../components/brands/brands-images';
import ProductsBanner from '../../components/products/products-banner';
import Banner from '../../components/banner/banner';

const Brands = (props) => {

    const { data, error } = useSWR('api/brands', (url) => fetch(url).then(res => res.json()));
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>


    const brand_list = [];
    data.map(brand => brand_list.push(brand.Brand));

    console.log(brand_list);

    return (
        <>
            <ProductsBanner />
            <BrandsImages brands={brand_list} />
        </>
    )
}

// export async function getServerSideProps() {
//     const allBrands = await getAllBrands();

//     return {
//         props: {
//             allBrands: allBrands,
//         },
//     }
// }

export default Brands