import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// antd
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../style_module.scss';

const tailLayout = {
    wrapperCol: {
        offset: 5
    }
};

const SiginIn = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="signin">
            <div className="signin_inner">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        hasFeedback
                        validateStatus="error" // success warning error
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        validateStatus="error" // success warning error
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!'
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default withRouter(SiginIn);
