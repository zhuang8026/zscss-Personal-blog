import React, { lazy } from 'react';

const Home = lazy(() => import('components/pages/Home'));
const penDetail = lazy(() => import('components/pages/penDetail'));

//admin
const SiginIn = lazy(() => import('components/pages/Admin/SiginIn'));
const SiginUp = lazy(() => import('components/pages/Admin/SiginUp'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        authRequired: false,
        layouts: ['NavLeft']
    },
    {
        path: '/admin/sign-in',
        component: SiginIn,
        exact: true,
        authRequired: false,
        layouts: []
    },
    {
        path: '/admin/sign-up',
        component: SiginUp,
        exact: true,
        authRequired: false,
        layouts: ['']
    },
    {
        path: '/pen-detail/:id?',
        component: penDetail,
        exact: true,
        authRequired: false,
        layouts: ['NavLeft']
    }
];

export default routes;
