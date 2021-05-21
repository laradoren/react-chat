import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Block} from "components";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
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
                    onFinish={onFinish}
                >
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" size="large">
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