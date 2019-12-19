const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";
const CHANGE_ACTIVE_DIALOG = "CHANGE_ACTIVE_DIALOG";
const SET_DIALOGS = "SET_DIALOGS";

let initialState = {
    dialogs: [
        { id: 0, name: "1234124" },
        { id: 1, name: "Vlad" },
        { id: 2, name: "Igor" },
        { id: 3, name: "Maxim" },
        { id: 4, name: "Liza" }
    ],
    dialogWithID: 0,
    dialogWithName: "",

    messages: [
        { id: 0, message: '12515215', fromDialog: 0, sendByMe: false},
        { id: 1, message: 'Hey2', fromDialog: 1, sendByMe: true},
        { id: 2, message: 'Hey3', fromDialog: 2, sendByMe: false },
        { id: 3, message: 'Hey4', fromDialog: 3, sendByMe: false },
        { id: 4, message: 'Hey5', fromDialog: 4, sendByMe: true },
    ],
    newMessageText: ""

}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, { id: state.messages[state.messages.length - 1].id + 1, message: state.newMessageText, fromDialog: state.dialogWithID, sendByMe: true }],
                newMessageText: ""

            }

        case CHANGE_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.messageText
            }

        case CHANGE_ACTIVE_DIALOG:

            return {
                ...state,
                dialogWithID: action.dialogID,
                dialogWithName: action.dialogName
            }

        case SET_DIALOGS:

            return {
                ...state,
                dialogs: [...state.dialogs, ...action.dialogs],
                messages: [...state.messages, ...action.messages],
                dialogWith: [...state.dialogWith, ...action.dialogWith],
                newMessageText: [...state.newMessageText, ...action.newMessageText]
            }

        default:
            return state;
    }
}

export const sendMessageActionCreater = () => {
    return { type: SEND_MESSAGE }
}

export const changeMessageTextActionCreater = (text) => {
    return { type: CHANGE_MESSAGE_TEXT, messageText: text }
}

export const changeActiveDialogActionCreater = (dialogID, dialogName) => {
    return { type: CHANGE_ACTIVE_DIALOG, dialogID: dialogID, dialogName: dialogName }
}

export const setDialogsAC = (dialogs, messages, dialogWith, newMessageText) => {
    return {
        type: SET_DIALOGS, dialogs: dialogs,
        messages: messages, dialogWith: dialogWith,
        newMessageText: newMessageText
    }
}

export default dialogsReducer;