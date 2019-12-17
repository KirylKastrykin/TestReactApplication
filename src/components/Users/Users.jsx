import React from 'react'
import classes from "./Users.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, name: "Kiryl", photoURL: require("./../Assets/postUserIcon.jpg"), followed: true, status: "simple status of Kiryl", location: { city: "Minsk", country: "Belarus" } },
            { id: 2, name: "Andre", photoURL: require("./../Assets/postUserIcon.jpg"), followed: false, status: "simple status of Andre", location: { city: "Undead Burg", country: "Anor-Londo" } },
            { id: 3, name: "Quilaag", photoURL: require("./../Assets/postUserIcon.jpg"), followed: false, status: "simple status of Quilaag", location: { city: "Blight Town", country: "Isalit" } }
        ])
    }

    return (
        props.users.map(u => <div key={u.id} className={classes.usersPage}>

            <span>
                <div>
                    <img src={u.photoURL} className={classes.userPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>
            <span className={classes.usersPage}>
                <div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>
                <div>
                    <div>
                        {u.location.country},
                    </div>
                    <div>
                        {u.location.city}
                    </div>
                </div>

            </span>
        </div>
        ))
}



export default Users;