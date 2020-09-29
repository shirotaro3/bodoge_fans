import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useGlobalState } from './ContextProvider';

const Redirector = () => {
  const [globalState, dispatch] = useGlobalState();
  // リダイレクトが実行済みでない時、コンポーネントを出現させる。
  if (!globalState.redirect.isExecuted) {
    return <RedirectWrapper to={globalState.redirect.path} />;
  }
  return <></>;
};

const RedirectWrapper = ({to}) => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    dispatch({type: 'REDIRECTION_COMPLETED'});
  }, []);
  return (
    <Redirect to={to} />
  );
};

export default Redirector;