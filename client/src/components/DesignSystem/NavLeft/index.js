import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import './style_module.scss';

const NavLeft = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>
                        <span>come soon</span>
                        <img src={require(`images/Home/zscss.png`)} alt="home" />
                    </Link>
                </li>
                <li>
                    <span>come soon</span>
                    <img src={require(`images/Home/zscss.png`)} alt="vue" />
                </li>
                <li>
                    <span>come soon</span>
                    <img src={require(`images/Home/zscss.png`)} alt="react" />
                </li>
                <li>
                    <span>come soon</span>
                    <img src={require(`images/Home/zscss.png`)} alt="php" />
                </li>
                <li>
                    <span>come soon</span>
                    <img src={require(`images/Home/zscss.png`)} alt="mysql" />
                </li>
            </ul>
        </nav>
    );
};

export default NavLeft;
