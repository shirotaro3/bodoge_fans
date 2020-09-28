import React from 'react';
import { LinkWhite as Link } from '../../shared/Links';
import { LoginButton } from '../../shared/Buttons';

const Unauthenticated = () => {
  return (
    <div>
      <Link to='/users/login'>
        <LoginButton>ログイン</LoginButton>
      </Link><br />
      <Link to='/users/registration'>→初めて利用される方</Link>
    </div>
  );
}

export default Unauthenticated;