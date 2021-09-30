import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import enLocale from "date-fns/locale/en-US";

const Time = ({date}) =>  {
    console.log(date);
    let normalDate =  new Date(+date.slice(0, 4), +date.slice(5, 7), +date.slice(8, 10), +date.slice(11, 13), +date.slice(14, 16), +date.slice(17, 19));
    return (
        <Fragment>
            {
                normalDate && <span className="message__date">
                {formatDistanceToNow(normalDate,
                    {locale: enLocale, addSuffix: true}
                )}
            </span>}
        </Fragment>

    )
};

Time.propTypes = {
    date: PropTypes.string,
};

export default Time;