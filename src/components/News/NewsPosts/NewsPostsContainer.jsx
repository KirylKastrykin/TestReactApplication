import React from 'react';
import { changeNewNewsTextActionCreater, addNewsActionCreater, unLikeActionCreater, addLikeActionCreater } from '../../../redux/news-reducer';
import { connect } from 'react-redux';
import NewsPosts from './NewsPosts';


let mapStateToProps = (state) => {

    return {

        newsData: state.newsPage.news,
        newPostText: state.newsPage.newNewsText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addLike: (newsID) => {
            let action = addLikeActionCreater(newsID);
            dispatch(action)
        },

        unLike: (newsID) => {
            let action = unLikeActionCreater(newsID);
            dispatch(action)
        }
    }
}

const NewsPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPosts);

export default NewsPostsContainer;