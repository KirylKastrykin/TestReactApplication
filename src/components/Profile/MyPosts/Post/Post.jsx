import React from 'react';
import classes from "./Post.module.css"

const Post = (props) => {


    let onAddLike = () => {
        props.addLike(props.id)
    }

    let onUnLike = () => {
        props.unLike(props.id)
    }

    let checkLike = () => {
        props.wasLiked ? onUnLike() : onAddLike()
    }

    return (
        <div className={classes.item}>
            <img className={classes.itemIcon} src={require("./../../../Assets/postUserIcon.jpg")}></img>
            {props.message}
            <div>
                <img onClick={checkLike} className={classes.likeIcon} src={props.wasLiked ? require("./../../../Assets/likedIcon.png") : require("./../../../Assets/notLikedIcon.png")} />
                <span> {props.likeCount} </span>
            </div>
        </div>
    )
}

export default Post;