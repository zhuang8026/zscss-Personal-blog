//react
import React, { lazy, useState, createContext, useEffect, useRef, useCallback, useContext } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { from } from 'rxjs';
import Cookies from 'js-cookie';

// API
import axios from 'axios';
import { postAdminSignIinAPI } from 'api/admin';

export const AdminContext = createContext();

const AdminContainer = props => {
    const { history, location } = props;
    // const [admin, setAdmin] = useState(JSON.parse(Cookies.get('admin_scToken')));
    const [adminData, setAdminData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const fetchListener = useRef(null); // fetch
    // 登入
    const setLoggedInMember = res => {
        setIsLoggedIn(true);
        Cookies.set('admin_scToken', res.data, { expires: 7, path: '' });
        const isAdmin = [];
        isAdmin.push({ loginState: true, all: JSON.parse(Cookies.get('admin_scToken')) });
        setAdminData(isAdmin);
    };

    // 登出
    const unsetLoggedInMember = () => {
        if (isLoggedIn) {
            history.push(location.pathname.split('/').slice(0, 3).join('/'));
        }
        setIsLoggedIn(false);
        Cookies.remove('admin_scToken', { path: '' });
        const isAdmin = {
            loginState: false,
            body: null
        };
        setAdminData(isAdmin);
    };

    // 登入監控
    const ListenAdminSignIn = () => {
        let adData = Cookies.get('admin_scToken') ? JSON.parse(Cookies.get('admin_scToken')) : '';
        const signInData = {
            account: adData ? adData.body.account : '',
            password: adData ? adData.body.password : ''
        };
        fetchListener.current = from(axios(postAdminSignIinAPI(signInData))).subscribe(res => {
            if (res.status === 200) {
                if (res.data.state === 200) {
                    const isAdmins = new Array();
                    isAdmins.push({ loginState: true, all: JSON.parse(Cookies.get('admin_scToken')) });
                    setAdminData(isAdmins);
                } else {
                    console.log('sign out again');
                }
            }
        });
    };

    useEffect(() => {
        ListenAdminSignIn();
    }, []);

    return (
        <AdminContext.Provider
            value={{
                adminData,
                setLoggedInMember,
                unsetLoggedInMember
            }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default withRouter(AdminContainer);