import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const UserRegistrationForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [globalState, dispatch] = useGlobalState();

  // wait 通信の待機中を表す *boolean
  const [wait, setWait] = useState(false);
  // Submit時の処理
  const onSubmit = handleSubmit(async (data) => {
      try {
        setWait(true);
        const response = await axios.post('/api/users/registration', data);
        setWait(false);
        dispatch({type: 'LOGIN', name: response.data.name, id: response.data.id});
        dispatch({type: 'MESSAGE', text: '登録しました。'});
        dispatch({type: 'REDIRECT', to: '/users/dashboard'});
      } catch (err) {
        setWait(false);
        dispatch({type: 'ALERT', text: '処理に失敗しました。再度お試しください。'});
      }
  });
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