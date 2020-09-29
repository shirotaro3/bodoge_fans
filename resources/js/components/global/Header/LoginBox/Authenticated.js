import React from 'react';
import { LinkWhite as Link } from '../../../shared/Links';
import { LoginButton } from '../../../shared/Buttons';
import { useGlobalState } from '../../ContextProvider';

const Authenticated = () => {
  const [globalState, dispatch] = useGlobalState();
  return (
    <div>
      <Link to='/users/dashboard'>
      <LoginButton>{globalState.auth.name}さん</LoginButton>
      </Link><br />
      <Link to='/users/logout'>ログアウト</Link>
    </div>
  );
}

export default Authenticated;