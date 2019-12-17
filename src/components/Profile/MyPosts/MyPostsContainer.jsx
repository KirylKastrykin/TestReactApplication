import React from 'react';
import { addPostActionCreater, changeNewPostTextActionCreater } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {

    return {

        postData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (message) => {
            let action = changeNewPostTextActionCreater(message);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreater())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;