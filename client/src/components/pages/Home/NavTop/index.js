import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import Cookies from 'js-cookie';

const NavTop = () => {
    const [admin, setAdmin] = useState(JSON.parse(Cookies.get('admin_scToken')));
    const [isLoggedIn, setIsLoggedIn] = useState();

    // const WEDURL = window.location.href;
    const SiginOutCallBack = () => {
        Cookies.remove('admin_scToken', { path: '' });
        setIsLoggedIn(false);
    };

    return (
        <div className="top_nav">
            <ul>
                <li>
                    {admin && admin.state === 200 ? (
                        <>
                            <div className="nav_btn btn_left">{admin.nickname}</div>
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

                    <div className="nav_btn btn_left">0/人</div>
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
