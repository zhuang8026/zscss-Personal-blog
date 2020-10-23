import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
                <ul>
                    <li>
                        <img src="" alt="icon" />
                    </li>
                    <li>
                        <h3>個人</h3>
                        <p>關於</p>
                        <p>請求合作</p>
                    </li>
                    <li>
                        <h3>支援</h3>
                        <p>聯絡</p>
                    </li>
                </ul>
            </div>
            <div>
                <img src="" alt="facebook" />
                <img src="" alt="instagram" />
            </div>
        </footer>
    );
};

export default Footer;
