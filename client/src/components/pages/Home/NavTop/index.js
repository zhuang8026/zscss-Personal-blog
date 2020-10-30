import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import Cookies from 'js-cookie';

const NavTop = () => {
    // const WEDURL = window.location.href;
    const SiginOutCallBack = () => {
        Cookies.remove('adminData', { path: '' });
    };

    useEffect(() => {}, []);
    return (
        <div className="top_nav">
            <ul>
                <li>
                    <div className="nav_btn btn_left">
                        {Cookies.get('adminData') && JSON.parse(Cookies.get('adminData')).state === 200 ? (
                            <h1
                                onClick={() => {
                                    SiginOutCallBack();
                                }}
                            >
                                {JSON.parse(Cookies.get('adminData')).nickname}
                            </h1>
                        ) : (
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
                        )}
                    </div>
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
