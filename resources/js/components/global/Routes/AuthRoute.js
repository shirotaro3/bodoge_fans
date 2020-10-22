import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { useGlobalState } from '../ContextProvider';

const AuthRoute = ({component, ...props}) => {
  const location = useLocation();
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    if (!globalState.auth.isLoggedIn) {
      dispatch({type: 'MESSAGE', text: 'このページを見るにはログインが必要です。'});
    }
  }, []);
  if (location.pathname === props.path) {
    return globalState.auth.isLoggedIn ? <Route {...props} component={component} /> : <Redirect to='/users/login' />;
  }
  return <></>;
};

AuthRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string
};

export default AuthRoute;