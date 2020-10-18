import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import NoAuthRoute from './NoAuthRoute';

// pages
import Home from '../../../pages/Home';
import UsersRegistration from '../../../pages/users/Registration';
import UsersLogin from '../../../pages/users/Login';
import UsersLogout from '../../../pages/users/Logout';
import UsersLikes from '../../../pages/users/Likes';
import Dashboard from '../../../pages/users/Dashboard';
import Events from '../../../pages/events';
import Reviews from '../../../pages/reviews';
import FacilitiesCreate from '../../../pages/facilities/Create';
import FacilitiesShow from '../../../pages/facilities/Show';
import FacilitiesEdit from '../../../pages/facilities/Edit';
import FacilitiesSearch from '../../../pages/facilities/Search';
import NotFound from '../../../pages/404';

const Routes = () => {
  return (
    <Switch>
      {/* Common */}
      <Route exact path='/' component={Home} />

      {/* Users */}
      <NoAuthRoute exact path='/users/registration' component={UsersRegistration} />
      <NoAuthRoute exact path='/users/login' component={UsersLogin} />
      <AuthRoute exact path='/users/dashboard' component={Dashboard} />
      <AuthRoute exact path='/users/logout' component={UsersLogout} />
      <AuthRoute exact path='/users/likes' component={UsersLikes} />

      {/* Events */}
      <Route exact path='/events' component={Events} />

      {/* Reviews */}
      <Route exact path='/reviews' component={Reviews} />

      {/* Facilities */}
      <Route path='/facilities/:id(\d+)/edit' component={FacilitiesEdit} />
      <Route path='/facilities/:id(\d+)' component={FacilitiesShow} />
      <Route path='/facilities/search' component ={FacilitiesSearch} />
      <AuthRoute exact path='/facilities/create' component={FacilitiesCreate} />

      {/* 上記のどれにも一致しない場合に表示される */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;