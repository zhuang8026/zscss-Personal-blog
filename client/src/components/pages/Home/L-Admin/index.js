import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

// antd
import { WechatFilled } from '@ant-design/icons';

const Admin = () => {
    return (
        <div className="rating_card Admin">
            <div className="card_title">Admin List</div>
            <ul className="card_admin">
                <li>
                    <div className="rating_admin_img">
                        <img src="" alt="頭像" />
                        <p>william.chaung</p>
                    </div>
                    <div className="rating_admin_icon">
                        <WechatFilled />
                    </div>
                </li>
                <li>
                    <div className="rating_admin_img">
                        <img src="" alt="頭像" />
                        <p>margarita.cheng</p>
                    </div>
                    <div className="rating_admin_icon">
                        <WechatFilled />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Admin;
