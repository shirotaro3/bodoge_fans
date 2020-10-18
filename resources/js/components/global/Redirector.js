import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useGlobalState } from './ContextProvider';

const Redirector = () => {
  const [globalState, dispatch] = useGlobalState();
  // リダイレクト先登録時、リダイレクトする
  if (globalState.redirect.path) {
    return <RedirectWrapper to={globalState.redirect.path} />;
  }
  return <></>;
};

const RedirectWrapper = ({to}) => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    dispatch({type: 'REDIRECT_OK'});
  }, []);
  return (
    <Redirect to={to} />
  );
};

export default Redirector;