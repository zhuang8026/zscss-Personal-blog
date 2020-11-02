import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import Cookies from 'js-cookie';

const NavTop = () => {
    const [admin, setAdmin] = useState(Cookies.get('admin_scToken'));
    console.log(admin);
    // const WEDURL = window.location.href;
    const SiginOutCallBack = () => {
        Cookies.remove('admin_scToken', { path: '' });
    };

    useEffect(() => {}, []);
    return (
        <div className="top_nav">
            <ul>
                <li>
                    {Cookies.get('admin_scToken') && JSON.parse(Cookies.get('admin_scToken')).state === 200 ? (
                        <>
                            <div className="nav_btn btn_left">{JSON.parse(Cookies.get('admin_scToken')).nickname}</div>
                            <div
                                className="nav_btn btn_left btn_out"
                                onClick={() => {
                                    SiginOutCallBack();
                                }}
                            >
                                登出
                            </div>
                        </>
                    ) : (
                        <div className="nav_btn btn_left">
                            <Link
                                to={{
                                    pathname: '/admin/sign-in'
                                    // state: {
                                    //     redirectAfterLogin: location
                                    // }
                                }}
                            >
                                Admin
                            </Link>
                        </div>
                    )}

                    <div className="nav_btn btn_left">2/人</div>
                </li>
                <li>
                    <div className="nav_btn btn_right">新增</div>
                    <div className="nav_btn btn_right">查詢</div>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(NavTop);
