import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    let message = props.message

    return (
        <div >
            <div className={classes.message}>
                {(props.id % 2 === 1) ?
                    <div align="left" className={classes.messageToMe}>
                        {message}
                    </div>
                    :
                    <div align="right" className={classes.messageFromMe}>
                        {message}
                    </div>
                }

            </div>
        </div>
    )
}

export default Message;