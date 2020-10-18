import React from 'react';
import styled from 'styled-components';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import { useGlobalState } from '../../ContextProvider';

const LoginBox = ({className}) => {
  const [globalState, dispatch] = useGlobalState();

  return (
    <div className={className}>
      {globalState.auth.isLoggedIn
      ? <Authenticated />
      : <Unauthenticated />}
    </div>
  );
}

const StyledLoginBox = styled(LoginBox)`
  margin-left: 20px;
  border-radius: 4px;
  font-size: 11px;
  text-align: center;
`;

export default StyledLoginBox;