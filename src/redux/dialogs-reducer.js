const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";
const CHANGE_ACTIVE_DIALOG = "CHANGE_ACTIVE_DIALOG";
const SET_DIALOGS = "SET_DIALOGS";

let initialState = {
    dialogs: [
        { id: 1, name: "1234124" },
        { id: 2, name: "Vlad" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Maxim" },
        { id: 5, name: "Liza" }
    ],
    dialogWith: "",

    messages: [
        { id: 1, message: '12515215' },
        { id: 2, message: 'Hey2' },
        { id: 3, message: 'Hey3' },
        { id: 4, message: 'Hey4' },
        { id: 5, message: 'Hey5' },
    ],
    newMessageText: ""

}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, { id: state.messages[state.messages.length - 1].id + 1, message: state.newMessageText }],
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
                dialogWith: action.dialogID
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

export const changeActiveDialogActionCreater = (dialogID) => {
    return { type: CHANGE_ACTIVE_DIALOG, dialogID: dialogID }
}

export const setDialogsAC = (dialogs, messages, dialogWith, newMessageText) => {
    return {
        type: SET_DIALOGS, dialogs: dialogs,
        messages: messages, dialogWith: dialogWith,
        newMessageText: newMessageText
    }
}

export default dialogsReducer;