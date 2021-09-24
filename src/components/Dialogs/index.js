import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";

import './Dialogs.scss';
import {DialogItem} from "../";
import Search from "antd/es/input/Search";
import {Empty} from "antd";

const Dialogs = ({items, userId = 1, initialValue, onSearch}) => {
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
                        key={item._id}
                        user={item.user}
                        message={item}
                        unread = {6}
                        isMe = {item.user._id === userId }/> )
                        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                </div>
            </div>
        </Fragment>
    )
}

Dialogs.defaultProps = {
    items: {
        user: PropTypes.object,
        message: PropTypes.object
    }
};

Dialogs.propTypes = {
    items: PropTypes.object,
    userId: PropTypes.number,
    initialValue: PropTypes.string,
    onSearch: PropTypes.object
};

export default Dialogs;