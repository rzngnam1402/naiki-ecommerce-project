import React from 'react'
import classes from './products-header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const ProductsHeader = () => {
    return (
        <>
            <div className={classes.header__container}>
                <h2 className={classes.header__title}>All sneakers</h2>
                <div >
                    <ul className={classes.header__category}>
                        <li><FontAwesomeIcon className={classes.header__icon} icon={faCaretDown} />CATEGORY</li>
                        <li><FontAwesomeIcon className={classes.header__icon} icon={faCaretDown} />PRICE</li>
                        <li><FontAwesomeIcon className={classes.header__icon} icon={faCaretDown} />GENDER</li>
                        <li><FontAwesomeIcon className={classes.header__icon} icon={faCaretDown} />SIZE</li>
                        <li><FontAwesomeIcon className={classes.header__icon} icon={faCaretDown} />BRAND</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductsHeader