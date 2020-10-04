import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../global/ContextProvider';

const FacilityCreateEditForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [globalState, dispatch] = useGlobalState();

  // wait 通信の待機中を表す *boolean
  const [wait, setWait] = useState(false);
  const [formValue, setFormValue] = useState(false);

  // Submit時の処理
  const submit = handleSubmit(async (d) => {
      const data = {
        ...formValue,
        ...d,
        m_budget_id: formValue.budget.value,
        m_facility_type_id: formValue.facility_type.value,
        m_prefecture_id: formValue.prefecture.value,
        m_scale_id: formValue.scale.value,
        m_service_id: formValue.service.map(o => o.value)
      };
      try {
        setWait(true);
        const response = await axios.post('/api/facilities/store', data);
        setWait(false);
        dispatch({type: 'MESSAGE', text: '登録しました。'});
        dispatch({type: 'REDIRECT', to: `/facilities/${response.data.id}`});
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
      submit={submit}
      setFormValue={setFormValue}
      control={control}
      formValue={formValue}
      handleSubmit={handleSubmit}
    />
  )
};

export default FacilityCreateEditForm;