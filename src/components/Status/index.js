import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

const Status = ({status}) => (
    <div className={classNames("chat__dialog-header-status", {
        "chat__dialog-header-status--online" : status
    } )}>{status ? "online" : "offline"}</div>
);

Status.propTypes = {
    status: PropTypes.bool,
};

export default Status;