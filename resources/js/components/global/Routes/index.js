import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RequireAuth from './RequireAuth';

// pages
import Home from '../../../pages/Home';
import UsersRegistration from '../../../pages/users/Registration';
import UsersLogin from '../../../pages/users/Login';
import UsersLogout from '../../../pages/users/Logout';
import Dashboard from '../../../pages/users/Dash';
import Events from '../../../pages/events';
import FacilitiesSearch from '../../../pages/facilities';
import NotFound from '../../../pages/404';

const Routes = () => {
  return (
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
  );
};

export default Routes;