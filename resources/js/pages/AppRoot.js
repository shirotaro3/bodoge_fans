import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import Header from '../components/Header';

// pages
import Home from './Home';
import UsersRegistration from './users/Registration';
import UsersLogin from './users/Login';
import Events from './events';
import FacilitiesSearch from './facilities';
import NotFound from './404';

const AppRoot = () => {
    return (
        <Router>
            <Header />
            <Switch>
                {/* Common */}
                <Route exact path='/'>
                    <Home />
                </Route>

                {/* Users */}
                <Route path='/users/registration'>
                    <UsersRegistration />
                </Route>
                <Route path='/users/login'>
                    <UsersLogin />
                </Route>

                {/* Events */}
                <Router path='/events'>
                    <Events />
                </Router>

                {/* Facilities */}
                <Router path='/Facilities/Search'>
                    <FacilitiesSearch />
                </Router>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRoot;

// DOM element
if (document.getElementById('app_root')) {
    ReactDOM.render(<AppRoot />, document.getElementById('app_root'));
}