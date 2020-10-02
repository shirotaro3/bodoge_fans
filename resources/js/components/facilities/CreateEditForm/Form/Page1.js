import React from 'react';
import { Controller } from 'react-hook-form';
import { FormVertical as Form, Input, Textarea, Select } from '../../../shared/FormParts';
import { useGlobalState } from '../../../global/ContextProvider';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const Page1 = ({register, watch, errors, control, next, formValue}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilityTypes = globalState.selectValues.facilityTypes;
  const budgets = globalState.selectValues.budgets;
  const scales = globalState.selectValues.scales;
  return (
    <Form onSubmit={next} enctype='multipart/form-data'>
      <label>*お店/施設名</label>
      <Input
        name='name'
        ref={register({ required: true })}
        defaultValue={formValue.name || ''}
      />
      {errors.name && <p>必須項目です。</p>}

      <label>*簡単な紹介</label>
      <Textarea
        name='description'
        placeholder='1文字以内'
        rows={3}
        maxRows={6}
        ref={register({ required: true })}
        defaultValue={formValue.description || ''}
      />
      {errors.description && <p>必須項目です。</p>}

      <label>*お店/施設のタイプ</label>
      <Controller
        as={Select}
        name='m_facility_type_id'
        control={control}
        options={facilityTypes}
        defaultValue={formValue.m_facility_type_id || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.m_facility_type_id && <p>必須項目です。</p>}

      <label>*収容可能人数</label>
      <Controller
        as={Select}
        name='m_scale_id'
        control={control}
        options={scales}
        defaultValue={formValue.m_scale_id || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.m_scale_id && <p>必須項目です。</p>}

      <label>*予算</label>
      <Controller
        as={Select}
        name='m_budget_id'
        control={control}
        options={budgets}
        defaultValue={formValue.m_budget_id || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.m_budget_id && <p>必須項目です。</p>}

      <Button type='submit'>進む</Button>
    </Form>
  );
};

export default Page1;