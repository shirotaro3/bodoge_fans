import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const UserLoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [globalState, dispatch] = useGlobalState();
  const defaultRedirectPath = '/users/dashboard';

  // wait 通信の待機中を表す *boolean
  const [wait, setWait] = useState(false);

  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
      try {
        setWait(true);

        // SanctumのCSRF対策
        const csrf = await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/users/login', data);
        setWait(false);

        // ログイン情報の保持とメッセージ通知のアクションを実行する
        dispatch({type: 'LOGIN', data: response.data});
        dispatch({type: 'MESSAGE', text: `ログインしました。ようこそ、${response.data.name}さん！`});

        // afterLoginPathが登録されていればそこに、なければダッシュボードにリダイレクトする
        dispatch({type: 'REDIRECT', to: globalState.tracking.afterLoginPath || defaultRedirectPath});
      } catch (err) {
        setWait(false);
        dispatch({type: 'ALERT', text: '認証に失敗しました。入力内容をご確認ください。'});
      }
  });
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