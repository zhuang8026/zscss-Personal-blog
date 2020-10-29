import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const NavTop = () => {
    const WEDURL = window.location.href;
    return (
        <div className="top_nav">
            <ul>
                <li>
                    <div className="nav_btn btn_left">
                        <Link
                            to={{
                                pathname: `/admin/sign-in`
                                // state: {
                                //     redirectAfterLogin: location
                                // }
                            }}
                        >
                            Admin
                        </Link>
                        {/* <a href="/admin/sign-in">Admin</a> */}
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
