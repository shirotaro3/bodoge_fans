import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import Header from '../components/Header';

// pages
import Home from './Home';
import UsersRegistration from './users/Registration';
import NotFound from './404';

const Index = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/users/registration'>
                    <UsersRegistration />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;

// DOM element
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}