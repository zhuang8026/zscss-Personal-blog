import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import { withRouter, Redirect, Link } from 'react-router-dom';

// DesignSystem
import NavTop from 'components/DesignSystem/NavTop';

// component
import Tab from './Tab';
import DragVertical from './DragVertical';
import DragHorizontal from './DragHorizontal';
import DragTable from './DragTable';

// css
import './style_module.scss';

const Java = ({ match, history, location }) => {
    const javaRoutes = [
        {
            key: 'DragVertical',
            path: 'DragVertical',
            component: DragVertical
        },
        {
            key: 'DragHorizontal',
            path: 'DragHorizontal',
            component: DragHorizontal
        },
        {
            key: 'DragTable',
            path: 'DragTable',
            component: DragTable
        }
    ];

    return (
        <main>
            <NavTop />
            <Tab />
            <Switch>
                {javaRoutes.map((route, key) => (
                    <Route
                        key={`route_java_${key}`}
                        path={`${match.path}/${route.path}`}
                        component={route.component}
                        // exact={route.exact}
                        // render={() => {
                        //     return <route.component />;
                        // }}
                    />
                ))}
            </Switch>
        </main>
    );
};

export default withRouter(Java);
