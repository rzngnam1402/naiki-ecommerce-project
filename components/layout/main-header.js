import React from 'react'
import Link from 'next/link'
import classes from './main-header.module.css'

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <img className={classes.logo} src="images/logo/logo.png" alt="logo" />
            </Link>
            <nav >
                <ul className={classes.nav__links}>
                    <li >
                        <Link href="/brands">Brands</Link>
                    </li >
                    <li >
                        <Link href="#">Products</Link>
                    </li>
                </ul>
            </nav>
            <Link href="/contact-us" ><button className={classes.button}>Contact us</button></Link>
        </header >
    )
}

export default MainHeader