import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import { useGlobalState } from '../../ContextProvider';

const LoginBox = ({className}) => {
  const [globalState, ] = useGlobalState();

  return (
    <div className={className}>
      {globalState.auth.isLoggedIn
        ? <Authenticated />
        : <Unauthenticated />}
    </div>
  );
};

LoginBox.propTypes = {
  className: PropTypes.string
};

const StyledLoginBox = styled(LoginBox)`
  margin-left: 20px;
  border-radius: 4px;
  font-size: 11px;
  text-align: center;
`;

export default StyledLoginBox;