const ADD_NEWS = "ADD-ADD_NEWS";
const CHANGE_NEW_NEWS_TEXT = "CHANGE_NEW_NEWS_TEXT";
const CHANGE_NEW_NEWS_HEADER = "CHANGE_NEW_NEWS_HEADER";
const ADD_LIKE = "ADD_LIKE";
const UNLIKE = "UNLIKE";

let initialState = {
    news: [
        { id: 1, message: 'Hey1', likeCount: 1, wasLiked: false, author: "Name1", header: 123},
        { id: 2, message: 'Hey2', likeCount: 3, wasLiked: false, author: "Name1", header: 123},
        { id: 3, message: 'Hey3', likeCount: 5, wasLiked: false, author: "Name1", header: 123},
        { id: 4, message: 'Hey4', likeCount: 10, wasLiked: false, author: "Name1", header: 123}
    ],
    newNewsText: "",
    newNewsHeader: ""
}

let newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, { id: state.news[state.news.length - 1].id + 1, message: state.newNewsText, likeCount: 0, wasLiked: false, author: "Name1", header: state.newNewsHeader}],
                newNewsText: "",
                newNewsHeader: ""
            }
        case CHANGE_NEW_NEWS_TEXT:
            return {
                ...state,
                newNewsText: action.newText
            }

            case CHANGE_NEW_NEWS_HEADER:
                return {
                    ...state,
                    newNewsHeader: action.newHeader
                }

        case ADD_LIKE:

            return {
                ...state,
                news: state.news.map((p) => {
                    if (p.id === action.NewsID) {
                        return { ...p, likeCount: ++p.likeCount, wasLiked: true }
                    }
                    return p;
                })
            }

        case UNLIKE:

            return {
                ...state,
                news: state.news.map((p) => {
                    if (p.id === action.NewsID) {
                        return { ...p, likeCount: --p.likeCount, wasLiked: false }
                    }
                    return p;
                })
            }

        default:
            return { ...state }
    }
}

export const addNewsActionCreater = () => {
    return { type: ADD_NEWS }
}

export const changeNewNewsTextActionCreater = (text) => {
    return { type: CHANGE_NEW_NEWS_TEXT, newText: text }
}

export const changeNewNewsHeaderActionCreater = (text) => {
    return { type: CHANGE_NEW_NEWS_HEADER, newHeader: text }
}

export const addLikeActionCreater = (NewsID) => {
    return { type: ADD_LIKE, NewsID: NewsID }
}

export const unLikeActionCreater = (NewsID) => {
    return { type: UNLIKE, NewsID: NewsID }
}


export default newsReducer;