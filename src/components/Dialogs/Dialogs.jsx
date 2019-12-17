import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogHeader from './DialogHeader/DialogHeader';
import DialogItemContainer from './DialogItem/DialogItemContainer';

const Dialogs = (props) => {


    let newMessageRef = React.createRef()

    const sendMessage = () => {
        let message = newMessageRef.current.value;
        if (message) {
            props.onSendMessage();
        }
    }

    const onMessageChange = () => {
        let message = newMessageRef.current.value;
        props.updateNewMessageText(message);
    }
    let lastMessage = props.dialogsData.messages[props.dialogsData.messages.length - 1].message;


    let dialogsElement = props.dialogsData.dialogs.map((dialog) => <DialogItemContainer name={dialog.name} id={dialog.id} lastMessage={lastMessage} />)
    let messagesElement = props.dialogsData.messages.map((message) => <Message message={message.message} id={message.id} />)

    const checkPressedKey = () => {
        let key = window.event.keyCode;
        if (key === 10) {
            sendMessage();
        }
    }




    return (

        <div className={classes.dialogs}>


            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>
            {props.dialogWith ?
                <div align='center'>
                    <DialogHeader dialogID={props.dialogsData.dialogWith} dialogs={props.dialogsData.dialogs} />
                    <div>


                        <div></div>

                        <div className={classes.messages}>
                            {messagesElement}
                        </div>
                        <div>
                            <div>
                                <textarea className={classes.dialogTextArea} onKeyPress={checkPressedKey} placeholder='Enter message. Ctrl + Enter to send' onChange={onMessageChange} ref={newMessageRef} value={props.newMessageText}></textarea>
                            </div>
                            <div align="right" >
                                <button onClick={sendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div />
            }
        </div>

    )
}

export default Dialogs;