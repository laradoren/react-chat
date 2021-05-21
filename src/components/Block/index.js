import React from 'react';
import PropTypes from "prop-types";
import {Button as BaseButton} from "antd";
import classNames from "classnames";

import './Block.scss';

const Block = ({children, className}) => <div className={classNames("block", className)}>{children}</div>

Block.propTypes = {

};

export default Block;