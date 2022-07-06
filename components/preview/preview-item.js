import React from 'react'
import classes from './preview.module.css'

const Item = (props) => {
    const { key, name, src } = props

    return (
        <div className={classes.container}>
            <img src={src} alt="" />
        </div>
    )
}

export default Item