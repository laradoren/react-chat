import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";

import {Button, Block} from "components";

const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    let success = true;
    return (
        <div>
            <div className="auth__top">
                <h2>Register</h2>
                <p>Please register for use chat!</p>
            </div>
            <Block>
                {success ?
                    (
                        <Form
                            name="normal_login"
                            className="login-form"
                            onSubmit={handleSubmit}
                        >
                            <Form.Item
                                name="email"
                                hasFeedback validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}
                                help={touched.email && errors.email}
                            >
                                <Input
                                    id="email"
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Email"
                                    size="large"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Form.Item>
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
                                name="password" hasFeedback
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
                            <Form.Item
                                name="repeat" hasFeedback
                                validateStatus={!touched.repeat ? "" : errors.repeat ? "error" : "success"}
                                help={touched.repeat && errors.repeat}
                            >
                                <Input
                                    id="repeat"
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Repeat password"
                                    size="large"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.repeat}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    size="large"
                                    onClick={handleSubmit}>
                                    Register
                                </Button>
                            </Form.Item>
                            <Link to="/login" className="auth__register-link">Log In</Link>
                        </Form>
                    ) : (
                        <div className="auth__success-block">
                            <div>
                                <InfoCircleTwoTone />
                            </div>
                            <h2>Please confirm your account</h2>
                            <p>We sent email with confirmed link on your email!</p>
                        </div>
                    )}

            </Block>
        </div>
    );
};

export default RegisterForm;