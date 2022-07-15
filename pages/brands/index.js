import React from 'react'
import useSWR from 'swr'

const Brands = (props) => {

    const { data, error } = useSWR('api/brands', (url) => fetch(url).then(res => res.json()));
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    console.log(data);

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
                {data.map((brand, index) => (
                    <li key={index}>{brand.Brand}</li>
                ))}
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