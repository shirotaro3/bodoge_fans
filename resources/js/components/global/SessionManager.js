import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';

const SessionManager = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    if (sessionUserName) {
      dispatch({type: 'LOGIN', name: sessionUserName});
    }
    dispatch({type: 'RESOLVE'});
  }, []);
  return globalState.auth.resolved ? children : <></>;
};

export default SessionManager;