import React, {Fragment} from 'react';
import { Spin } from 'antd';
import PropTypes from "prop-types";
import {Empty} from "antd";

import "./Messages.scss";
import {Message} from "../";

const Messages = ({isLoading, array, messagesRef}) => {
    return (
        <div className="messages" ref = {messagesRef}>
            {isLoading
                ? <Spin size="large" />
                : (array.length)
                    ? array.map( message => <Message
                            user={message.user}
                            text={message.text}
                            date={ message.created_at}
                            isMe={false}
                            isRead={false}
                            key={message._id.toString()}/>
                ) : <Empty />}
        </div>
    )
}


Messages.propTypes = {
    array: PropTypes.array
};

export default Messages;