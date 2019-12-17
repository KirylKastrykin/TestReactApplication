import React from 'react';
import classes from "./ProfileInfo.module.css"


class ProfileInfo extends React.Component {


    state = {
        statusSwitch: false,
        status: this.props.statusText
    }



    statusHandler = () => {
        this.setState({
            statusSwitch: !this.state.statusSwitch
        })

    }



    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        }, () => this.props.changeStatusText(this.state.status));

    }

    render() {




        return (
            <div>
                <div className={classes.avatarBlock}>
                    <div>
                        <img src={require('./../../Assets/profileInfoAvatar.jpg')} className={classes.avatar} />
                    </div>
                    <div className={classes.aboutMe}>
                        <div><h1>My Name</h1></div>
                        <div>My Location</div>
                        <div>Age</div>
                        <div>My Contacts</div>
                    </div>
                </div>

                <div className={classes.statusBlock} >
                    {!this.state.statusSwitch ? <div> <div onDoubleClick={this.statusHandler}> {this.props.statusText} </div></div> : <input autoFocus={true} onBlur={this.statusHandler} value={this.state.status} onChange={this.onStatusChange}></input>}
                </div>
            </div>

        )
    }
}

export default ProfileInfo;