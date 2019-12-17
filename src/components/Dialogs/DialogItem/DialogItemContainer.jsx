import React from 'react';
import { connect } from 'react-redux'
import { changeActiveDialogActionCreater } from '../../../redux/dialogs-reducer';
import DialogItem from './DialogItem';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
        dialogWith: state.dialogsPage.dialogWith,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeActiveDialog: (dialogID) => {
            dispatch(changeActiveDialogActionCreater(dialogID))
        }
    }
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);


export default DialogItemContainer;