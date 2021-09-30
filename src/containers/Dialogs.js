import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {dialogsActions} from "redux/actions";
import {Dialogs as BaseDialogs} from "components";

const Dialogs = ({fetchDialogs, currentDialog, setCurrentDialog, items, userId}) => {
    const [inputValue, setValue] = useState("");
    const [filtered, setFilteredItems] = useState(Array.from(items));

    const onChangeInput = (value) => {
        setFilteredItems(items.filter(
            dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
        ));
        setValue(value);
    }


    useEffect(() => {
        if(!items.length) {
            fetchDialogs();
        } else {
            setFilteredItems(items);
        }
    }, [items])

    return (
        <BaseDialogs
        items = {filtered}
        userId = {userId}
        onSearch = {onChangeInput}
        inputValue = {inputValue}
        onSelectDialog = {setCurrentDialog}
        currentDialogId = {currentDialog}
        />
    )
}


Dialogs.propTypes = {
    items: PropTypes.array,
    userId: PropTypes.number
};

export default connect(({dialogs}) => dialogs, dialogsActions)(Dialogs);