import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const UserLoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  // wait 通信の待機中を表す *boolean
  const [wait, setWait] = useState(false);
  // redirectPath 処理成功時のリダイレクト先パス *string
  const [redirectPath, redirectTo] = useState(null);
  
  const [globalState, dispatch] = useGlobalState();

  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
      try {
        setWait(true);
        const csrf = await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/users/login', data);
        setWait(false);
        dispatch({type: 'LOGIN', name: response.data.name, isLoggedIn: true});
        dispatch({type: 'MESSAGE', text: `ログインしました。ようこそ、${response.data.name}さん！`});
        redirectTo('/users/dashboard');
      } catch (err) {
        setWait(false);
        dispatch({type: 'ALERT', text: 'メールアドレスまたはパスワードが正しくありません。'});
      }
  });

  // 処理に成功時、リダイレクトする
  if (redirectPath) {
    return <Redirect to={redirectPath || '/'} />;
  }
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      wait={wait}
      onSubmit={onSubmit}
    />
  )
};

export default UserLoginForm;