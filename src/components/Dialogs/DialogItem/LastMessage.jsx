import React from 'react';




const LastMessage = (props) => {

    let findLastMessage = () => {

        for (let i = props.messages.length - 1; i >= 0; i--) {

            if (props.messages[i].fromDialog == props.id) {
                return props.messages[i].message;
            }


        }

    }

    return (
        <div>Last message: {findLastMessage()}</div>
    )
}


export default LastMessage;