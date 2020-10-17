import React, { useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import { BoxRoundedBlack as Box } from '../../components/shared/Boxes';

const UsersLogout = () => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    async function callApi() {
      try {
        dispatch({type: 'API_CALL_START'});
        const response = await axios.post('/api/users/logout');
        dispatch({type: 'API_CALL_END'});
        dispatch({type: 'LOGOUT'});
        dispatch({type: 'MESSAGE', text: 'ログアウトしました。'});
        dispatch({type: 'REDIRECT', to: '/'});
      } catch(err) {
        console.log(err);
        dispatch({type: 'API_CALL_END'});
        dispatch({type: 'REDIRECT', to: '/'});
        dispatch({type: 'ALERT', text: 'エラーが発生しました。'});
      }
    }
    callApi();
  },[]);
  return (
    <div className='fadein'>
      <Box>
        ログアウトしています...
      </Box>
    </div>
  );
};

export default UsersLogout;