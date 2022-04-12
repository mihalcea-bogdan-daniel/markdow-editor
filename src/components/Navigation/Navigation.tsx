import React from "react";
import styles from "./navigation.module.scss";
import { Sling as Hamburger } from 'hamburger-react'

const Navigation = ()=>{
    return (
    <nav className={styles.nav}>
        <Hamburger />
    </nav>
    )
}

export default Navigation;