import React from 'react';
import styled from 'styled-components';
import { Input } from '../shared/FormParts';
import { WhiteButton as Button } from '../shared/Buttons';

const LoginForm = ({className}) => {
  return (
    <div className={className}>
      <h2>ユーザーログイン</h2>
      Email:<Input /><br />
      Password:<Input /><br />
      <Button>ログイン</Button>
    </div>
  );
}

const StyledLoginForm = styled(LoginForm)`
  background: #555;
  color: #fff;
  margin: 50px auto;
  padding: 15px;
  max-width: 500px;
  height: 300px;
  border-radius: 20px;
  text-align: center;
`

export default StyledLoginForm;