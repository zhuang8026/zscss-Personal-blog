import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// Context
import { AdminContext } from 'contexts/admin';

const NavTop = () => {
    // const [admin, setAdmin] = useState(JSON.parse(Cookies.get('admin_scToken')));
    const { adminData, unsetLoggedInMember } = useContext(AdminContext);

    // const WEDURL = window.location.href;

    // 登出
    const SiginOutCallBack = () => {
        unsetLoggedInMember();
    };

    return (
        <div className="top_nav">
            <ul>
                <li>
                    {adminData.length > 0 && adminData[0].loginState ? (
                        <>
                            <div className="nav_btn btn_left">{adminData[0].all.nickname}</div>
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

                    <div className="nav_btn btn_left">{adminData.length > 0 ? adminData.length : 0}/人</div>
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
