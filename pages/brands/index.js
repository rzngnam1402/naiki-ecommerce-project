import React from 'react'
import { getAllBrands } from '../../lib/api-utils'
import classes from './brands.module.css'
import useSWR from 'swr'

const Brands = (props) => {

    const { data, error } = useSWR('api/brands', (url) => fetch(url).then(res => res.json()));
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    console.log(data[1].Brand);

    return (
        <>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <p>lmao</p>
            <ul>
                {data.map(brand => {
                    <li key={brand.Brand}>{`${brand.Brand}`}</li>
                })}
            </ul>
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