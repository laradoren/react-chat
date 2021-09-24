import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

import {Button, Block} from "components";

const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Log In</h2>
                <p>Please log into your account</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="username"
                        hasFeedback validateStatus={!touched.username ? "" : (errors.username ? "error" : "success")}
                        help={touched.username && errors.username}
                    >
                        <Input
                            id="username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        validateStatus={!touched.password ? "" : errors.password ? "error" : "success"}
                        help={touched.password && errors.password}
                    >
                        <Input
                            id="password"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            size="large"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size="large"
                            onClick={handleSubmit}>
                            Log in
                        </Button>
                    </Form.Item>
                    <Link to="/register" className="auth__register-link">Register</Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;