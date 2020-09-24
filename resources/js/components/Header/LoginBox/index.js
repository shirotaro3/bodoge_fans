import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoginButton } from '../../shared/Buttons';

const LoginBox = ({className}) => {
  return (
    <div className={className}>
      <Link to='/users/login'>
        <LoginButton>ログイン</LoginButton>
      </Link><br />
      <Link to='/users/registration'>→初めて利用される方</Link>
    </div>
  );
}

const StyledLoginBox = styled(LoginBox)`
  margin-left: 20px;
  padding: 7px 13px;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 11px;
  text-align: center;
`

export default StyledLoginBox;