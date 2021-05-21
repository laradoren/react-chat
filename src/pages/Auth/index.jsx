import React,  { useState, useEffect } from "react";
import {Block, Button} from "../../components";
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {LoginForm, RegisterForm} from "../../modules";


import "./Auth.scss";
import {Route} from "react-router-dom";

const Auth = (props) => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginForm} />
                <Route exact path={"/register"} component={RegisterForm} />
            </div>
        </section>
    );
};

export default Auth;


