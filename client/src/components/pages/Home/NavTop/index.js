import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { from } from 'rxjs';

// API
import axios from 'axios';
import { getAllAdminAPI } from 'api/admin';
// Context
import { AdminContext } from 'contexts/admin';

const NavTop = () => {
    const [list, setList] = useState([]); // admin list data
    const { adminData, unsetLoggedInMember } = useContext(AdminContext);
    const fetchListener = useRef(null); // fetch
    // const WEDURL = window.location.href;

    // admin list API (get)
    const getAllAdminAPICallBack = data => {
        fetchListener.current = from(axios(getAllAdminAPI())).subscribe(res => {
            if (res.status === 200) {
                let adminNum = res.data.filter(data => {
                    return data.loginStatus !== 0;
                });
                setList(adminNum);
            } else {
                console.log('sign in error');
            }
        });
    };

    useEffect(() => {
        getAllAdminAPICallBack();
    }, [adminData]);

    // 登出
    const SiginOutCallBack = () => {
        unsetLoggedInMember();
    };

    return (
        <div className="top_nav">
            <ul>
                <li>
                    {adminData.length > 0 && adminData[0].all.loginStatus ? (
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

                    <div className="nav_btn btn_left">{list.length > 0 ? list.length : 0}/人</div>
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
