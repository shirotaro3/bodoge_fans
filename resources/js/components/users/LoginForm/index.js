import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

const UserLoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  // wait 通信の待機中を表す *boolean
  const [wait, setWait] = useState(false);
  // redirectPath 処理成功時のリダイレクト先パス *string
  const [redirectPath, redirectTo] = useState(null);

  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
      try {
        console.log(data);
        setWait(true);
        const response = await axios.post('/api/users/registration', data);
        console.log(response);
        setWait(false);
        redirectTo('/');
      } catch (err) {
        setWait(false);
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