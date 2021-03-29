import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import { withRouter, Redirect, Link } from 'react-router-dom';

// DesignSystem
import NavTop from 'components/DesignSystem/NavTop';

// component
import Tab from './Tab';
import DndDrag from './DndDrag';
import DragTableClass from './DragTableClass';
import DragTableHooks from './DragTableHooks';
import DragGroup from './DragGroup';
import DragGroupV2 from './DragGroupV2/V2-origin';
import DragGroupV2Demo from './DragGroupV2Demo';

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
            title: 'Class-Drag',
            path: 'dragTableClass',
            component: DragTableClass
        },
        {
            title: 'Hooks-Drag',
            path: 'dragTableHooks',
            component: DragTableHooks
        },
        {
            title: 'dragGroup-useContext',
            path: 'dragGroup',
            component: DragGroup
        },
        {
            title: 'dragGroupv2-normal',
            path: 'dragGroupv2',
            component: DragGroupV2
        },
        {
            title: 'dragGroupv2Demo',
            path: 'dragGroupv2Demo',
            component: DragGroupV2Demo
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
