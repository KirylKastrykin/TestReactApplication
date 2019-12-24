import React from 'react';
import classes from './NewsPosts.module.css'

const NewsPosts = (props) => {

    const onUnLike = () => {
        props.unLike(props.id);
    }

    const onAddLike = () => {
        props.addLike(props.id);
    }

    const checkLike = () => {
        props.wasLiked ? onUnLike() : onAddLike();
    }

    return (
        <div>
            <div>
                <h3>
                    <img className={classes.itemIcon} src={require("./../../Assets/postUserIcon.jpg")}></img>
                    {props.header}

                </h3>
                <div><h5>Author: {props.author}</h5></div>
                <span>{props.message}</span>

            </div>
            <img onClick={checkLike} className={classes.likeIcon} src={props.wasLiked ? require("./../../Assets/likedIcon.png") : require("./../../Assets/notLikedIcon.png")} />
            <span> {props.likeCount} </span>
        </div>
    )
}

export default NewsPosts;