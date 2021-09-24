import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import {Empty} from "antd";

import "./Messages.scss";
import {Message} from "../";

const Messages = ({array}) => {
    return (
        <div className="messages">
            {   array.length
                ? array.map( message => <Message
                user={message.user}
                text={message.text}
                date={ new Date(2021, 7, 8, 12, 13, 60)}
                isMe={true}
                isRead={true}
            />)
            : <Empty />}
        </div>
    )
}

Messages.defaultProps = {
    items: {
        user: PropTypes.object,
        message: PropTypes.object
    }
};

Messages.propTypes = {
    array: PropTypes.object
};

export default Messages;