import React from 'react'
import classes from './hero-content.module.css'

const HeroContents = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.items}>
                    <h1>NEW ARRIVALS</h1>
                    <p>Latest Summer Collection</p>
                    <button>Order Now</button>  
                </div>
            </div>

        </div >
    )
}

export default HeroContents