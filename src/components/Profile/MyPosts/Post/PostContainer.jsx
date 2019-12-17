import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { addLikeActionCreater, unLikeActionCreater } from '../../../../redux/profile-reducer';

let mapStateToProps = (state) => {

    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addLike: (PostID) => {
            let action = addLikeActionCreater(PostID);
            dispatch(action)
        },

        unLike: (PostID) => {
            let action = unLikeActionCreater(PostID);
            dispatch(action)
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);



export default PostContainer;
