import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// components
import GlobalStyle from '../components/global/GlobalStyle';
import RequireAuth from '../components/global/RequireAuth';
import { ContextProvider } from '../components/global/ContextProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

// pages
import Home from './Home';
import UsersRegistration from './users/Registration';
import UsersLogin from './users/Login';
import UsersLogout from './users/Logout';
import Dashboard from './users/Dash';
import Events from './events';
import FacilitiesSearch from './facilities';
import NotFound from './404';

const AppRoot = ({className}) => {
    return (
        <div className={className}>
            <ContextProvider>
                <Router>
                    <Header />
                    <Switch>
                        {/* Common */}
                        <Route exact path='/' component={Home} />

                        {/* Users */}
                        <Route exact path='/users/registration' component={UsersRegistration} />
                        <Route exact path='/users/login' component={UsersLogin} />

                        {/* Events */}
                        <Route exact path='/events' component={Events} />

                        {/* Facilities */}
                        <Route exact path='/Facilities/Search' component={FacilitiesSearch} />

                        {/* 認証が必要なルート */}
                        <RequireAuth>
                            <Switch>
                                <Route exact path='/users/dashboard' component={Dashboard} />
                                <Route exact path='/users/logout' component={UsersLogout} />
                                <Route component={NotFound} />
                            </Switch>
                        </RequireAuth>

                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </Router>
            </ContextProvider>
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