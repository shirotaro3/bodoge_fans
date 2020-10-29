import React, { useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import { BoxRoundedBlack as Box } from '../../components/shared/Boxes';

const UsersLogout = () => {
  const [ , dispatch] = useGlobalState();
  useEffect(() => {
    async function callApi() {
      try {
        await axios.post('/api/users/logout');
        dispatch({type: 'LOGOUT'});
        dispatch({type: 'MESSAGE', text: 'ログアウトしました。'});
        dispatch({type: 'REDIRECT', to: '/'});
      } catch (err) {
        console.log(err);
        dispatch({type: 'REDIRECT', to: '/'});
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