const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const ADD_LIKE = "ADD_LIKE";
const UNLIKE = "UNLIKE";
const CHANGE_STATUS_TEXT = "CHANGE_STATUS_TEXT"

let initialState = {
    posts: [
        { id: 1, message: 'Hey1', likeCount: 1, wasLiked: false },
        { id: 2, message: 'Hey2', likeCount: 3, wasLiked: false },
        { id: 3, message: 'Hey3', likeCount: 5, wasLiked: false },
        { id: 4, message: 'Hey4', likeCount: 10, wasLiked: false }
    ],
    newPostText: "",
    statusText: "Simpe status (Double Click to write something else)"
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: state.posts[state.posts.length - 1].id + 1, message: state.newPostText, likeCount: 0 }],
                newPostText: ""
            }
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case CHANGE_STATUS_TEXT:
            return {
                ...state,
                statusText: action.text
            }


        case ADD_LIKE:

            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id === action.PostID) {
                        return { ...p, likeCount: ++p.likeCount, wasLiked: true }
                    }
                    return p;
                })
            }

        case UNLIKE:

            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id === action.PostID) {
                        return { ...p, likeCount: --p.likeCount, wasLiked: false }
                    }
                    return p;
                })
            }

        default:
            return { ...state }
    }
}

export const addPostActionCreater = () => {
    return { type: ADD_POST }
}

export const changeNewPostTextActionCreater = (text) => {
    return { type: CHANGE_NEW_POST_TEXT, newText: text }
}

export const addLikeActionCreater = (PostID) => {
    return { type: ADD_LIKE, PostID: PostID }
}

export const unLikeActionCreater = (PostID) => {
    return { type: UNLIKE, PostID: PostID }
}

export const changeStatusTextActionCreater = (text) => {
    return { type: CHANGE_STATUS_TEXT, text: text }
}

export default profileReducer;