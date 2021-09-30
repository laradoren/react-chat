import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {messagesActions} from "redux/actions";
import {Messages as BaseMessages} from "components";

const Messages = ({fetchMessages, currentDialog, items, isLoading}) => {
    const messagesRef = useRef(null);

    useEffect(() => {
        if(currentDialog) {
            fetchMessages(currentDialog);
        }
    }, [currentDialog]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 9000);
    }, )

    return (
        <BaseMessages
            array = {items}
            isLoading = {isLoading}
            messagesRef = {messagesRef}
        />
    )
}


Messages.propTypes = {
    items: PropTypes.array,
    userId: PropTypes.number
};

export default connect(({dialogs, messages}) => ({
    currentDialog: dialogs.currentDialog,
    items: messages.items,
    isLoading: messages.isLoading
}), messagesActions)(Messages);