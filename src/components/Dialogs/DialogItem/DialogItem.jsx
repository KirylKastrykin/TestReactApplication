import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import LastMessage from './LastMessage';



const DialogItem = (props) => {

    const onChangeActiveDialog = () => {
        props.changeActiveDialog(props.id, props.name);
    }

    let path = "/dialogs/" + props.id;
    return (
        <nav>
            <div className={classes.dialog} onClick={onChangeActiveDialog} >
                <NavLink activeClassName={classes.activeLink} to={path}>
                    <div><p><img src={require("./../../Assets/dialogItemAvatar.png")} /><b className={classes.dialogItems}>{props.name}</b></p></div>
                    <div className={classes.dialogLastMessage}><LastMessage messages={props.dialogsData.messages} dialogs={props.dialogsData.dialogs} id={props.id} /></div>
                </NavLink>
            </div>
        </nav>
    )
}


export default DialogItem;