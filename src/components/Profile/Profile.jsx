import React from 'react';
import classes from "./Profile.module.css"
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = () => {

    return (
        <div>

            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;