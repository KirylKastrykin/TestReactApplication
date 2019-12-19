import React from 'react';
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {

        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div align="left" >
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Dialogs</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </div>
        }



        return (

            <nav className={classes.nav}>
                <div >
                    <img onClick={this.toggleState.bind(this)} align="left" className={classes.dropDownIcon} src={require("./../Assets/navBarDropDownIcon.png")} >
                    </img>
                    <br clear="left"></br>


                    <div>{dropdownText}</div>
                </div>
            </nav>
        )
    }

}

export default Navbar;