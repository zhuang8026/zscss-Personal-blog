import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

const Header = () => {
    return (
        <div className="rating_title_inner">
            <div className="rating_title">
                <figure>
                    <img src="./images/otis192.png" alt=""/>
                </figure>
                <h2>Code share for <span>william.chuang</span></h2>
            </div>
            <div className="rating_time">
                <div>2020/09/11, 08:00 | 已訪問 10 人數 | 目前所在類別 react程式</div>
            </div>
        </div>
    )
}

export default Header;