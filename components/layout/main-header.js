import React from 'react'
import Link from 'next/link'
import classes from './main-header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <img className={classes.logo} src="/images/logo/logo.png" alt="logo" />
            </Link>
            <nav >
                <ul className={classes.nav__links}>
                    <Link href="/brands">
                        <li >
                            Brands
                        </li >
                    </Link>
                    <Link href="/products">
                        <li >
                            Products
                        </li>
                    </Link>
                    <Link href="./cart">
                        <FontAwesomeIcon className={classes.nav__icons} icon={faCartShopping} />
                    </Link>
                </ul>
            </nav>
            <Link href="/contact-us" ><button className={classes.button}>Contact us</button></Link>
        </header >
    )
}

export default MainHeader