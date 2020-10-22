import React, { lazy } from 'react';

const IntroPage = lazy(() => import('components/pages/IntroPage'))
const Home = lazy(() => import('components/pages/Home'))

const routes = [
    {
        path: '/',
        component: IntroPage,
        exact: true,
        authRequired: false,
        layouts: [],
    },
    {
        path: '/home',
        component: Home,
        exact: true,
        authRequired: false,
        layouts: [],
    }
];


export default routes;

