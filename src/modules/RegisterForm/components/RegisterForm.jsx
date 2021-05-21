import React from 'react';
import {Form, Input} from "antd";
import Icon, {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Button, Block} from "components";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    let success = true;
    return (
        <div>
            <div className="auth__top">
                <h2>Register</h2>
                <p>Please register for use chat!</p>
            </div>
            <Block>
                {!success ?
                    (
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                hasFeedback validateStatus="success"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Email"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item
                                name="username"
                                hasFeedback validateStatus="success"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Username"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please repeat your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Repeat password"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" size="large">
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