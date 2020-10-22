import React from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { useGlobalState } from '../ContextProvider';

const NoAuthRoute = ({component, ...props}) => {
  const location = useLocation();
  const [globalState, ] = useGlobalState();
  if (location.pathname === props.path) {
    return globalState.auth.isLoggedIn ? <Redirect to='/' /> : <Route {...props} component={component} />;
  }
  return <></>;
};

NoAuthRoute.propTypes = {
  component: PropTypes.node,
  path: PropTypes.string
};

export default NoAuthRoute;