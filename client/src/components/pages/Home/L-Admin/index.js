import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";

const Admin = () => {
    return (
        <div class="rating_card Admin">
            <div class="card_title">Admin List</div>
            <ul class="card_admin">
                <li>
                    <div class="rating_admin_img">
                        <img src="" alt="頭像"/>
                        <p>william.chaung</p>
                    </div>
                    <div class="rating_admin_icon">
                        <img src="" alt="icon"/>
                    </div>
                </li>
                <li>
                    <div class="rating_admin_img">
                        <img src="" alt="頭像"/>
                        <p>margarita.cheng</p>
                    </div>
                    <div class="rating_admin_icon">
                        <img src="" alt="icon"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Admin;