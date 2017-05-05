// src/routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';
import Login from './components/Login';

const Routes = (props) => (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
    
export default Routes;