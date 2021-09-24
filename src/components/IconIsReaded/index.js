import React, {Fragment} from 'react';
import PropTypes from "prop-types";

import check from './../../assets/images/check.png';
import doubleCheck from './../../assets/images/double-check.png';


const IconIsReaded = ({isMe, isReaded}) => (
     <Fragment>
         {
             isMe ? isReaded ? (
                 <img src={doubleCheck} alt="doubleCheck" className="message__icon-readed"/>
             ) : (
                 <img src={check} alt="check" className="message__icon-readed--no"/>
             ) : <></>
         }
     </Fragment>
);


IconIsReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};

export default IconIsReaded;