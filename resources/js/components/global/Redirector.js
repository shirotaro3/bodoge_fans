import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useGlobalState } from './ContextProvider';

const Redirector = () => {
  const [globalState,] = useGlobalState();
  // リダイレクト先登録時、リダイレクトする
  if (globalState.redirect.path) {
    return <RedirectWrapper to={globalState.redirect.path} />;
  }
  return <></>;
};

const RedirectWrapper = ({to}) => {
  const [ , dispatch] = useGlobalState();
  useEffect(() => {
    dispatch({type: 'REDIRECT_OK'});
  }, []);
  return (
    <Redirect to={to} />
  );
};

RedirectWrapper.propTypes = {
  to: PropTypes.string
};

export default Redirector;