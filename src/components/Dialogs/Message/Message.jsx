import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    let message = props.message

    return (
        <div >

            {props.fromDialog == props.dialogWithID &&
                <div className={classes.message}>
                    {props.sendByMe ?
                        <div align="right" className={classes.messageFromMe}>
                            {message}
                        </div>
                        :
                        <div align="left" className={classes.messageToMe}>
                            {message}
                        </div>

                    }
                </div>
            }
        </div>

    )
}

export default Message;