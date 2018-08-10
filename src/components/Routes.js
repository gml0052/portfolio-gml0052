import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'

const routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: Home
    }
];

const Routes = () => {    
    return (
        <Router > 
            <Switch >               
                { routes.map( route => <Route key={route.name} path={route.path} component={route.component} /> ) }
            </Switch>
        </Router>
    );
}

export default Routes;