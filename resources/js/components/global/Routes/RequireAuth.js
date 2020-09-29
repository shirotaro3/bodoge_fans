import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useGlobalState } from '../ContextProvider';

const RequireAuth = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  return (
    globalState.auth.isLoggedIn
    ? children
    : <Redirect to={'/users/login'} />
  )
};

export default RequireAuth;