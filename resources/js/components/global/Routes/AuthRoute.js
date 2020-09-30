import React, { useEffect } from 'react';
import { Route, useLocation, Redirect } from 'react-router-dom';
import { useGlobalState } from '../ContextProvider';

const AuthRoute = ({component, ...props}) => {
  const location = useLocation();
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    if (!globalState.auth.isLoggedIn) {
      dispatch({type: 'SET_AFTER_LOGIN_PATH', path: location.pathname});
      dispatch({type: 'MESSAGE', text: 'このページを見るにはログインが必要です。'});
    }
  }, []);
  if (location.pathname === props.path) {
    return globalState.auth.isLoggedIn ? <Route {...props} component={component} /> : <Redirect to='/users/login' />;
  }
  return <></>
};

export default AuthRoute;