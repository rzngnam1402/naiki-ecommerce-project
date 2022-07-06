import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './preview-item.js'
import classes from './preview.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const sneakers = [
    {
        id: 1, name: "item1", img: 'images/lux/1.jpg'
    },
    {
        id: 2, name: "item1", img: 'images/lux/2.jpg'
    },
    {
        id: 3, name: "item1", img: 'images/lux/3.jpg'
    },
    {
        id: 4, name: "item1", img: 'images/lux/4.jpg'
    },
    {
        id: 5, name: "item1", img: 'images/lux/5.jpg'
    },
    {
        id: 6, name: "item1", img: 'images/lux/6.jpg'
    },
    {
        id: 7, name: "item1", img: 'images/lux/7.jpg'
    },
    {
        id: 8, name: "item1", img: 'images/lux/8.jpg'
    },
]

const Preview = (props) => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <div>
                    <h1 className={classes.title}>Luxurious sneakers</h1>
                </div>

            </div>
            <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000}>
                {sneakers.map(item =>
                    <Item
                        key={item.id}
                        name={item.name}
                        src={item.img}
                    />
                )}
            </Carousel>
            <div className={classes.btn__container}>
                <button>
                    See All
                    <FontAwesomeIcon className={classes.icon} icon={faArrowRight} />
                </button>
            </div>
        </section>
    )
}

export default Preview