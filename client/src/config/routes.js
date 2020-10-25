import React, { lazy } from 'react';

const Home = lazy(() => import('components/pages/Home'));
const pen = lazy(() => import('components/pages/pen'));
const penDetail = lazy(() => import('components/pages/penDetail'));

const routes = [
    {
        path: '/home',
        component: Home,
        exact: true,
        authRequired: false,
        layouts: ['NavLeft']
    },
    {
        path: '/pen',
        component: pen,
        exact: true,
        authRequired: false,
        layouts: ['NavLeft', 'Footer']
    },
    {
        path: '/pen-detail/:id?',
        component: penDetail,
        exact: true,
        authRequired: false,
        layouts: ['NavLeft', 'Footer']
    }
];

export default routes;
