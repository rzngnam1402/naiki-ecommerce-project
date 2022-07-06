import React from 'react'
import classes from './featured-sneaker.module.css'

const FeaturedSneaker = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.description}>
                    <h1>Nike Waffle One</h1>
                    <p>Bringing a new look the Nike Waffle One blances everything you love most about
                        heritage Nike running with fresh innovations.
                    </p>
                    <button>Buy Now</button>
                </div>

                <div className={classes.image}>
                    <img src="images/Featured/2.jpg" alt="" />
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.image}>
                    <img src="images/Featured/1.jpg" alt="" />
                </div>
                <div className={classes.description}>
                    <h1>Adidas Originals</h1>
                    <p>Discover the adidas streetwear collection
                    </p>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default FeaturedSneaker