import React ,{ Fragment, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

// DesignSystem
import NoMatch from 'components/DesignSystem/NoMatch';

// config
import routes from 'config/routes';

// package
// import classnames from "classnames";
// import './App.css';

function App({match}) {
    // all route
    const Routes = routes.map((route, key) => (
        <Route
            key={`route_${key}`}
            path={`${route.path}`}
            exact={route.exact}
            sensitive
            render={() => {
                return (
                    <route.component
                        localeMatch={match}
                        routeData={route}
                    />
                );
            }}
        />
    ));

    return (
        <div className="App">
        William use
        <Fragment>
            {/* {(layouts.indexOf("intro") < 0 && layouts.indexOf("topNav") > 0) && (
                <Suspense fallback={<div></div>}>
                    <TopNav />
                </Suspense>
            )} */}
            <div>
                <Suspense fallback={<div></div>}>
                    <Switch>
                        {Routes}
                        <Route component={NoMatch} />
                    </Switch>
                </Suspense>
            </div>
            {/* {
                (layouts.indexOf("intro") < 0 && layouts.indexOf("no-footer") < 0) && (
                    <Suspense fallback={<div style={{ display: "none" }} />}>
                        {(getBooleanFromENV('REACT_APP_IS_HOME_V2', false)) ? <Footer2 /> : <Footer />}
                    </Suspense>
                )
            } */}
        </Fragment>
        </div>
    );
}

export default withRouter(App);
