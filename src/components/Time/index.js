import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import enLocale from "date-fns/locale/en-US";

const Time = ({date}) => (
    <Fragment>
        {
            date && <span className="message__date">
                {formatDistanceToNow(date,
            {locale: enLocale, addSuffix: true}
                 )}
            </span>}
    </Fragment>

);

Time.propTypes = {
    date: PropTypes.string,
};

export default Time;