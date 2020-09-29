import React, { useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import { BoxTransparent as Box } from '../../components/shared/Boxes';
import Waiting from '../../components/shared/Waiting';

const UsersLogout = () => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    async function callApi() {
      try {
        const response = await axios.post('/api/users/logout');
        dispatch({type: 'LOGOUT'});
        dispatch({type: 'MESSAGE', text: 'ログアウトしました。'});
        dispatch({type: 'REDIRECT', to: '/'});
      } catch(err) {
        console.log(err);
        dispatch({type: 'REDIRECT', to: '/'});
        dispatch({type: 'ALERT', text: '処理に失敗しました。再度お試しください。'});
      }
    }
    callApi();
  },[]);
  return (
    <Box>
      <Waiting wait={true} text='ログアウトしています。' />
    </Box>
  );
};

export default UsersLogout;