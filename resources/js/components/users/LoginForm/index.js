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
      // LaravelSanctumのCSRF対策
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('/api/users/login', data);

      // ログイン情報の保持とメッセージ通知のアクションを実行する
      dispatch({type: 'LOGIN', data: response.data});
      dispatch({type: 'MESSAGE', text: `ログインしました。ようこそ、${response.data.name}さん！`});

      // afterLoginPathが登録されていればそこに、なければダッシュボードにリダイレクトする
      dispatch({type: 'REDIRECT', to: globalState.tracking.afterLoginPath || defaultRedirectPath});
    } catch (err) {
      console.log(err);
      const status = err.status || err.response.status;
      if (status === 403) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        dispatch({type: 'ALERT', text: 'メールアドレスかパスワードが正しくありません。'});
      }
    }
  });
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default UserLoginForm;