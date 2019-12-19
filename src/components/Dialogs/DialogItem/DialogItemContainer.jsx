import React from 'react';
import { connect } from 'react-redux'
import { changeActiveDialogActionCreater } from '../../../redux/dialogs-reducer';
import DialogItem from './DialogItem';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
        dialogWithID: state.dialogsPage.dialogWithID,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeActiveDialog: (dialogID, dialogName) => {
            dispatch(changeActiveDialogActionCreater(dialogID, dialogName))
        }
    }
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);


export default DialogItemContainer;