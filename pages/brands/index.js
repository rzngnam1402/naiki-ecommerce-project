import React from 'react'

const dummy_brands = [
    {
        name: "Adidas",
        price: "10"
    }
]
const Brands = () => {
    return (
        <div>
            <ul>
                {dummy_brands.map(brand => <li style={{ marginTop: '10rem' }}>{brand.name}</li>)}
            </ul>
        </div>
    )
}

export default Brands