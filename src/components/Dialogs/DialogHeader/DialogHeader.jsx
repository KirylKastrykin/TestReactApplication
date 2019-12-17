import React from 'react';
import classes from './DialogHeader.module.css'


const DialogHeader = (props) => {

    return (
        <div align="left" className={classes.dialogHeader}>
            <span><img src={require("./../../Assets/dialogItemAvatar.png")} /></span>
            <div align="left">
                <p className={classes.dialogHeaderName}>{props.dialogID}</p>

            </div>

        </div>
    )
}

export default DialogHeader;