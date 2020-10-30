import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import { from } from 'rxjs';
import Cookies from 'js-cookie';

// API
import axios from 'axios';
import { postAdminSignIinAPI } from 'api/admin';

// antd
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../style_module.scss';

const SiginIn = ({ history }) => {
    const [username, setUsername] = useState(''); // username
    const [password, setPassword] = useState(''); // password
    const [isLoading, setIsLoading] = useState(false); // 載入
    const fetchListener = useRef(null); // fetch
    // 登入
    const postAdminSignIinAPICallBack = data => {
        setIsLoading(true);
        const signInData = {
            account: data.username,
            password: data.password
        };
        fetchListener.current = from(axios(postAdminSignIinAPI(signInData))).subscribe(res => {
            // console.log(res);
            if (res.status == 200) {
                if ((res.data.state = 200)) {
                    setTimeout(() => {
                        setIsLoading(false);
                        Cookies.set('adminData', res.data, { expires: 7, path: '' });
                        history.push('/');
                    }, 2000);
                }
            }
        });
    };

    const onFinish = values => {
        postAdminSignIinAPICallBack(values);
    };

    //  取消監聽
    useEffect(() => {
        if (fetchListener.current) fetchListener.current.unsubscribe();
        // return () => {
        //     if (fetchListener.current) {
        //         fetchListener.current.unsubscribe();
        //     }
        // };
    }, []);

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
                        // validateStatus="error" // success warning error
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!'
                            }
                        ]}
                        getValueProps={e => {
                            setUsername(e !== undefined ? e : '');
                        }}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        // validateStatus="error" // success warning error
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!'
                            }
                        ]}
                        getValueProps={e => {
                            setPassword(e !== undefined ? e : '');
                        }}
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            disabled={username !== '' && password !== '' ? false : true}
                            loading={isLoading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default withRouter(SiginIn);
