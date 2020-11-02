//react
import React, { lazy, useState, createContext, useEffect, useRef, useCallback, useContext } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

// All - pages
import Home from '../../components/pages/Home';
//admin
import SiginIn from 'components/pages/Admin/SiginIn';

export const AdminContext = createContext();

const AdminContainer = ({ history, location }) => {
    const [admin, setAdmin] = useState(JSON.parse(Cookies.get('admin_scToken')));
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 登入
    const setLoggedInMember = res => {
        Cookies.set('admin_scToken', res.data, { expires: 7, path: '' });
        setIsLoggedIn(true);
    };

    // 登出
    const unsetLoggedInMember = () => {
        if (isLoggedIn) {
            history.push(location.pathname.split('/').slice(0, 3).join('/'));
        }
        Cookies.remove('admin_scToken', { path: '' });
        setIsLoggedIn(false);
    };

    return (
        <AdminContext.Provider value={520}>
            <>
                <Home />
                <SiginIn />
            </>
        </AdminContext.Provider>
    );
};

export default withRouter(AdminContainer);
