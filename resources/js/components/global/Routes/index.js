import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import NoAuthRoute from './NoAuthRoute';

// pages
import Home from '../../../pages/Home';
import UsersRegistration from '../../../pages/users/Registration';
import UsersLogin from '../../../pages/users/Login';
import UsersLikes from '../../../pages/users/Likes';
import Dashboard from '../../../pages/users/Dashboard';
import Events from '../../../pages/events';
import Reviews from '../../../pages/reviews';
import FacilitiesCreate from '../../../pages/facilities/Create';
import FacilitiesShow from '../../../pages/facilities/Show';
import FacilitiesEdit from '../../../pages/facilities/Edit';
import FacilitiesSearch from '../../../pages/facilities/Search';
import NotFound from '../../../pages/404';

import { useGlobalState } from '../ContextProvider';

const Routes = () => {
  const [globalState, ] = useGlobalState();
  const userId = globalState.auth.isLoggedIn ? globalState.auth.user.id : 'Guest';
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', process.env.MIX_GA_MEASUREMENT_ID, {
      'user_id': userId,
      'page_path': `${location.pathname}${location.search}`,
      'custom_map': {'dimension1': userId}
    });
  });
  return (
    <Switch>
      {/* Common */}
      <Route exact path='/' component={Home} />

      {/* Users */}
      <NoAuthRoute exact path='/users/registration' component={UsersRegistration} />
      <NoAuthRoute exact path='/users/login' component={UsersLogin} />
      {/* TODO: AuthRouteのexactなしに対応する */}
      <AuthRoute exact path='/users/dashboard' component={Dashboard} />
      <AuthRoute exact path='/users/dashboard/owner' component={Dashboard} />
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