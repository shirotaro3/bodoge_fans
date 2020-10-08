import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const UserLoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [globalState, dispatch] = useGlobalState();
  const defaultRedirectPath = '/users/dashboard';

  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
      try {
        dispatch({type: 'API_CALL_START'});

        // SanctumのCSRF対策
        const csrf = await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/users/login', data);

        dispatch({type: 'API_CALL_END'});

        // ログイン情報の保持とメッセージ通知のアクションを実行する
        dispatch({type: 'LOGIN', data: response.data});
        dispatch({type: 'MESSAGE', text: `ログインしました。ようこそ、${response.data.name}さん！`});

        // afterLoginPathが登録されていればそこに、なければダッシュボードにリダイレクトする
        dispatch({type: 'REDIRECT', to: globalState.tracking.afterLoginPath || defaultRedirectPath});
      } catch (err) {
        dispatch({type: 'API_CALL_END'});
        dispatch({type: 'ALERT', text: '認証に失敗しました。入力内容をご確認ください。'});
      }
  });
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      onSubmit={onSubmit}
    />
  )
};

export default UserLoginForm;