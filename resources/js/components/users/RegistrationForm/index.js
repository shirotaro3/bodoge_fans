import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

const UserRegistrationForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();

  // wait 非同期通信の待機中を表す *boolean
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
      } catch (err) {
        console.log('errr');
      }
  });

  // 処理に成功時、リダイレクトする
  if (redirectPath) {
    return <Redirect to={redirectPath} />;
  }
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      wait={wait}
      onSubmit={onSubmit}
      control={control}
    />
  )
};

export default UserRegistrationForm;