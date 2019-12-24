import React from 'react';
import classes from './NewsPage.module.css'
import NewsPosts from './NewsPosts/NewsPosts';
import NewsPostsContainer from './NewsPosts/NewsPostsContainer';
import NewsPage from './NewsPage';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {

    return {
        newsData: state.newsPage.news,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;