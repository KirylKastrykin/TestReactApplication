import React from 'react';
import classes from "./ProfileInfo.module.css"
import { changeStatusTextActionCreater } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';


let mapStateToProps = (state) => {

    return {
        statusText: state.profilePage.statusText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeStatusText: (text) => {
            let action = changeStatusTextActionCreater(text);
            dispatch(action)
        }
    }
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);


export default ProfileInfoContainer;

