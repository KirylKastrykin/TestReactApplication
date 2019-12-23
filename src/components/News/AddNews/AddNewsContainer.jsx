import React from 'react';
import classes from './AddNews.module.css'
import AddNews from './AddNews';
import { connect } from 'react-redux';
import { addNewsActionCreater, changeNewNewsTextActionCreater, changeNewNewsHeaderActionCreater } from '../../../redux/news-reducer';


let mapStateToProps = (state) => {

    return {

        newsData: state.newsPage.news,
        newNewsText: state.newsPage.newNewsText,
        newNewsHeader: state.newsPage.newNewsHeader
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            let action = addNewsActionCreater();
            dispatch(action)
        },

        changeNewNewsText: (text) => {
            let action = changeNewNewsTextActionCreater(text);
            dispatch(action)
        },

        changeNewNewsHeader: (text) => {
            let action = changeNewNewsHeaderActionCreater(text);
            dispatch(action)
        }
    }
}

const AddNewsContainer = connect(mapStateToProps, mapDispatchToProps)(AddNews);

export default AddNewsContainer;