import React from 'react';
import classes from "./Header.module.css"

const Header = () => {

    return (
        <header className={classes.header}>
            <img src={require('./../Assets/header-bg.png')}></img>
        </header>
    )
}

export default Header;