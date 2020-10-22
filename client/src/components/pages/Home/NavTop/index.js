import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

const NavTop = () => {
    return (
        <div className="top_nav">
            <ul>
                <li>
                    <div className="nav_btn btn_left">頭像</div>
                    <div className="nav_btn btn_left">人數</div>
                </li>
                <li>
                    <div className="nav_btn btn_right">新增</div>
                    <div className="nav_btn btn_right">查詢</div>
                </li>
            </ul>
        </div>
    )
}

export default NavTop