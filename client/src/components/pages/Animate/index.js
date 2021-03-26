import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import { withRouter, Redirect, Link } from 'react-router-dom';

// DesignSystem
import NavTop from 'components/DesignSystem/NavTop';

// component
import Tab from './Tab';
import DndDrag from './DndDrag';
import DragTableOrigin from './DragTableOrigin';
import DragTableV1 from './DragTableV1';
import DragNoUse from './DragNoUse';

// css
import './style_module.scss';

const Animate = ({ match }) => {
    const pathData = [
        {
            title: 'dndDrag',
            path: 'dndDrag',
            component: DndDrag
        },
        {
            title: 'DragTableOrigin',
            path: 'dragTableOrigin',
            component: DragTableOrigin
        },
        {
            title: 'DragTableV1',
            path: 'dragTableV1',
            component: DragTableV1
        },
        {
            title: 'dragNoUse',
            path: 'dragNoUse',
            component: DragNoUse
        }
    ];

    return (
        <main>
            <NavTop />
            <Tab pathData={pathData} />
            <Switch>
                {pathData.map((route, key) => (
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

export default withRouter(Animate);
