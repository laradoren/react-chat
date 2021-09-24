import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import isSameWeek from "date-fns/isSameWeek";

import './DialogItem.scss';
import {Avatar, IconIsReaded, Time} from "../";

const getLastMessageTime = date => {
    if(isToday(date)) {
        return format(date, "HH:mm");
    } else if(isSameWeek(date, new Date())) {
        return format(date, "eee");
    } else {
        return format(date, "dd/MM/yy");
    }
}


const DialogItem = ({user, message, unread, isMe}) => {
    return (
        <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
            <div className="dialogs__item-avatar">
                <Avatar user={user} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>{getLastMessageTime(message.date)}</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>
                    {isMe && <IconIsReaded isReaded={true} isMe={isMe}/>}
                    {!isMe && (unread > 0 &&
                        <div className="dialogs__item-info-bottom-count">
                            {unread > 9 ? "9+" : unread}
                        </div>)}
                </div>
            </div>

        </div>
    )
}

DialogItem.defaultProps = {
    user: {
        fullname: PropTypes.string,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool,
    },
    message: {
        text: PropTypes.string,
        date: PropTypes.string
    }
};

DialogItem.propTypes = {
    user: PropTypes.object,
    message: PropTypes.object,

};

export default DialogItem;