import React, { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useGlobalState } from '../ContextProvider';

const RequireAuth = ({children}) => {
  const location = useLocation();
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    if (!globalState.auth.isLoggedIn) {
      dispatch({type: 'SET_AFTER_LOGIN_PATH', path: location.pathname});
      dispatch({type: 'MESSAGE', text: 'このページを見るにはログインが必要です。'});
    }
  }, []);
  return globalState.auth.isLoggedIn ? children : <Redirect to='/users/login' />;
};

export default RequireAuth;