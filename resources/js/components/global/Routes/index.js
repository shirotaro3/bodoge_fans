import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import NoAuthRoute from './NoAuthRoute';

// pages
import Home from '../../../pages/Home';
import UsersRegistration from '../../../pages/users/Registration';
import UsersLogin from '../../../pages/users/Login';
import UsersLogout from '../../../pages/users/Logout';
import Dashboard from '../../../pages/users/Dashboard';
import Events from '../../../pages/events';
import FacilitiesCreate from '../../../pages/facilities/Create';
import FacilitiesShow from '../../../pages/facilities/Show';
import FacilitiesSearch from '../../../pages/facilities';
import NotFound from '../../../pages/404';

const Routes = () => {
  return (
    <Switch>
      {/* Common */}
      <Route exact path='/' component={Home} />

      {/* Users */}

      {/* Events */}
      <Route exact path='/events' component={Events} />

      {/* Facilities */}
      <Route exact path='/facilities/search' component={FacilitiesSearch} />
      <Route path='/facilities/:id(\d+)' component={FacilitiesShow} />

      {/* 認証がない状態でのみ利用できるルート */}
      <NoAuthRoute exact path='/users/registration' component={UsersRegistration} />
      <NoAuthRoute exact path='/users/login' component={UsersLogin} />

      {/* 認証で保護されたルート */}
      <AuthRoute exact path='/users/dashboard' component={Dashboard} />
      <AuthRoute exact path='/users/logout' component={UsersLogout} />
      <AuthRoute exact path='/facilities/create' component={FacilitiesCreate} />

      {/* 上記のどれにも該当しない場合に表示される */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;