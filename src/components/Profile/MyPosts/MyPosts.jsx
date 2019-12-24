import React from 'react';
import classes from "./MyPosts.module.css"
import PostContainer from './Post/PostContainer';


const MyPosts = (props) => {



    let postElements = props.postData.map((post) => <PostContainer id={post.id} message={post.message} likeCount={post.likeCount} wasLiked={post.wasLiked} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        if (text) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={classes.profileTextarea} placeholder="Don't!" onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button className={classes.addPostButton} onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}

            </div>
        </div>

    )
}

export default MyPosts;