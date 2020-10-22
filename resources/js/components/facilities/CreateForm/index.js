import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const FacilityCreateEditForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [, dispatch] = useGlobalState();
  // ページ切り替え時にセットする
  const [formValue, setFormValue] = useState(false);

  // Submit時の処理
  const submit = handleSubmit(async (inputData) => {
    const submitData = new FormData();
    submitData.append('name', formValue.name);
    submitData.append('description', formValue.description);
    submitData.append('introduction', formValue.description);
    submitData.append('building', formValue.building);
    submitData.append('address', formValue.address);
    submitData.append('phone_number', formValue.phone_number);
    submitData.append('line', inputData.line);
    submitData.append('twitter', inputData.twitter);
    submitData.append('instagram', inputData.instagram);
    submitData.append('facebook', inputData.facebook);
    submitData.append('hp_url', inputData.hp_url);
    submitData.append('m_budget_id', formValue.budget.value);
    submitData.append('m_facility_type_id', formValue.facility_type.value);
    submitData.append('m_prefecture_id', formValue.prefecture.value);
    submitData.append('m_scale_id', formValue.scale.value);
    submitData.append('header_image', inputData.header_image[0]);
    formValue.services.forEach((o) => {
      submitData.append('m_service_ids[]', o.value);  // arrayデータを分割して入れ直す
    });
    try {
      const response = await axios.post(
        '/api/facilities',
        submitData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      );
      dispatch({type: 'SET_FACILITIES', data: [response.data]});
      dispatch({type: 'MESSAGE', text: '登録しました。'});
      dispatch({type: 'REDIRECT', to: '/users/dashboard/owner'});
    } catch (err) {
      //
    }
  });
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      submit={submit}
      setFormValue={setFormValue}
      control={control}
      formValue={formValue}
      handleSubmit={handleSubmit}
    />
  );
};

export default FacilityCreateEditForm;