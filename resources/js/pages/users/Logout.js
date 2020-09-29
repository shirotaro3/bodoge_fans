import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import { BoxTransparent as Box } from '../../components/shared/Boxes';
import Waiting from '../../components/shared/Waiting';

const UsersLogout = () => {
  const [globalState, dispatch] = useGlobalState();
  const [wait, setWait] = useState(true);
  useEffect(() => {
    async function callApi() {
      try {
        const response = await axios.post('/api/users/logout');
        setWait(false);
        dispatch({type: 'LOGOUT'});
        dispatch({type: 'MESSAGE', text: 'ログアウトしました。'});
      } catch(err) {
        console.log(err);
      }
    }
    callApi();
  },[]);
  if (wait) {
    return (
      <Box>
        <Waiting wait={wait} text='ログアウトしています。' />
      </Box>
    );
  }
  return <Redirect to='/' />;
};

export default UsersLogout;