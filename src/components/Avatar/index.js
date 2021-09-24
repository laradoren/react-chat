import React from 'react';
import PropTypes from "prop-types";

import './Avatar.scss';
import generateAvatarFromHash from "../../utils/generateAvatarFromHash";

const generateAvatar = (user) => {
    let {color, colorLighten} = generateAvatarFromHash(user._id);
    return (
        <div style={{background: `linear-gradient( 135deg, ${color} 0%, ${colorLighten} 96.52% )`}}
             src={user.avatar}
             alt={`Avatar ${user.fullname}`}
             className="avatar avatar--empty">
            {user.fullname.charAt(0).toUpperCase()}
        </div>
    )
}

const Avatar = ({user}) => {
    return user.avatar
        ? <img src={user.avatar} alt={`Avatar ${user.fullname}`} className="avatar"  />
        : generateAvatar(user);
}


Avatar.propTypes = {
    user: PropTypes.object

};

export default Avatar;