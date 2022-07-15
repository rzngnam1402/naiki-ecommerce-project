import React from 'react'
import classes from './hero-content.module.css'
import Link from 'next/dist/client/link'

const HeroContents = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.items}>
                    <h1>NEW ARRIVALS</h1>
                    <p>Latest Summer Collection</p>
                    <Link href='/products'><button>Order Now</button></Link>
                </div>
            </div>

        </div >
    )
}

export default HeroContents