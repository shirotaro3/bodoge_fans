import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import GlobalStyle from '../components/shared/GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';

// pages
import Home from './Home';
import UsersRegistration from './users/Registration';
import UsersLogin from './users/Login';
import Events from './events';
import FacilitiesSearch from './facilities';
import NotFound from './404';

const AppRoot = ({className}) => {
    return (
        <div className={className}>
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
                <Footer />
            </Router>
            <GlobalStyle />
        </div>
    );
}

const StyledAppRoot = styled(AppRoot)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export default StyledAppRoot;

// DOM element
if (document.getElementById('app_root')) {
    ReactDOM.render(<StyledAppRoot />, document.getElementById('app_root'));
}