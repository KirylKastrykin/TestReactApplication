import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {

    const onChangeActiveDialog = () => {
        let dialogID = props.name;
        props.changeActiveDialog(dialogID);
    }

    let path = "/dialogs/" + props.id;
    return (
        <nav>
            <div className={classes.dialog} onClick={onChangeActiveDialog} >
                <NavLink activeClassName={classes.activeLink} to={path}>
                    <div><p><img src={require("./../../Assets/dialogItemAvatar.png")} /><b className={classes.dialogItems}>{props.name}</b></p></div>
                    <div className={classes.dialogLastMessage}>{props.lastMessage}</div>
                </NavLink>
            </div>
        </nav>
    )
}


export default DialogItem;