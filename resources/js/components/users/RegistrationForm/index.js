import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const UserRegistrationForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [globalState, dispatch] = useGlobalState();

  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
      try {
        const response = await axios.post('/api/users/registration', data);
        // 登録成功時
        dispatch({type: 'LOGIN', data: response.data});
        dispatch({type: 'MESSAGE', text: `登録が完了しました。ようこそ、${response.data.name}さん！`});
        dispatch({type: 'REDIRECT', to: '/users/dashboard'});
      } catch (err) {
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
  )
};

export default UserRegistrationForm;