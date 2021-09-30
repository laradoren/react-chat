import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import isSameWeek from "date-fns/isSameWeek";

import './DialogItem.scss';
import {Avatar, IconIsReaded} from "../";

const getLastMessageTime = date => {
    let normalDate =  new Date(date.slice(0, 4), date.slice(5, 7), date.slice(8, 10), date.slice(11, 13),date.slice(14, 16), date.slice(17, 19));
    if(isToday(normalDate)) {
        return format(normalDate, "HH:mm");
    } else if(isSameWeek(normalDate, new Date())) {
        return format(normalDate, "eee");
    } else {
        return format(normalDate, "dd/MM/yy");
    }
}

const DialogItem = ({_id, user, message, unread, isMe, onSelect, selectedDialogId}) => {
   // console.log(selectedDialogId);
    //console.log(_id);
    return (
        <div className={
            classNames("dialogs__item", {
                "dialogs__item--online": user.isOnline,
                "dialogs__item--selected": selectedDialogId === _id
            })}
             onClick={() => onSelect(_id)}
        >
            <div className="dialogs__item-avatar">
                <Avatar user={user} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>{getLastMessageTime(message.created_at)}</span>
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
        created_at: PropTypes.string
    }
};

DialogItem.propTypes = {
    user: PropTypes.object,
    message: PropTypes.object,

};

export default DialogItem;