import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const UserRegistrationForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [, dispatch] = useGlobalState();

  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post('/api/users/registration', data);
      // 登録成功時
      dispatch({type: 'LOGIN', data: response.data});
      dispatch({type: 'MESSAGE', text: `登録が完了しました。ようこそ、${response.data.name}さん！`});
      dispatch({type: 'REDIRECT', to: '/users/dashboard'});
    } catch (err) {
      console.log(err);
      const status = err.status || err.response.status;
      if (status === 422) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        dispatch({type: 'ALERT', text: 'そのメールアドレスは既に登録されています。'});
      }
    }
  });
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      onSubmit={onSubmit}
      control={control}
    />
  );
};

export default UserRegistrationForm;