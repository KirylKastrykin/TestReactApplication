import React from 'react';
import { sendMessageActionCreater, changeMessageTextActionCreater, changeActiveDialogActionCreater, setDialogsAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        dialogWith: state.dialogsPage.dialogWith
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => {
            let action = changeMessageTextActionCreater(message);
            dispatch(action);

        },
        onSendMessage: (message) => {
            dispatch(sendMessageActionCreater())

        },
        changeActiveDialog: (dialogID) => {
            dispatch(changeActiveDialogActionCreater(dialogID))
        },
        setDialogs: (dialogs, messages, dialogWith, newMessageText) => {
            dispatch(setDialogsAC(dialogs, messages, dialogWith, newMessageText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;