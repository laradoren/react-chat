import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";

import './Dialogs.scss';
import {DialogItem} from "../";
import Search from "antd/es/input/Search";
import {Empty} from "antd";

const Dialogs = ({items, userId = 1, currentDialogId, initialValue, onSearch, onSelectDialog}) => {
    return (
        <Fragment>
            <div className="chat__sidebar-search">
                <Search
                    placeholder="Search in dialogs"
                    value={initialValue}
                    onChange = {e => onSearch(e.target.value)}/>
            </div>
            <div className="chat__sidebar-dialogs">
                <div className="dialogs">
                    {items.length
                        ? orderBy(items, ['date'], ['desc']).map(item => <DialogItem
                            onSelect = {onSelectDialog}
                            key={item._id}
                            _id={item._id}
                            user={item.user}
                            message={item}
                            unread = {6}
                            selectedDialogId = {currentDialogId}
                            isMe = {item.user._id === userId }/> )
                        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                </div>
            </div>
        </Fragment>
    )
}


Dialogs.propTypes = {
    items: PropTypes.array,
    userId: PropTypes.number,
    initialValue: PropTypes.string,
    onSearch: PropTypes.func
};

export default Dialogs;