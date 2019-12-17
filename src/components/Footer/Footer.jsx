import React from 'react';
import classes from "./Footer.module.css"

const Footer = () => {

    return (
        <header className={classes.footer}>
            <img src={require('./../Assets/footer-background.jpg')}></img>
        </header>
    )
}

export default Footer;