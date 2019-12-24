import React from 'react';
import classes from './Settings.module.css'

const Settings = (props) => {

    let handleClick = () => {
        props.onChangeTheme();
    }
    let buttonName = props.isDarkTheme ? "Ruin USSR Component" : "Return USSR Component";

    return (

        <div className={classes.settingsBody}>
            <div className={classes.settingsContent}>
                <span>UI Super Secret React Component</span>
                <div>
                    <button className={classes.settingsButton} onClick={handleClick}>{buttonName}</button>
                </div>
            </div>
        </div>


    )
}

export default Settings;