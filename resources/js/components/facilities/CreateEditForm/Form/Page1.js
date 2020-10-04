import React from 'react';
import { Controller } from 'react-hook-form';
import { FormVertical as Form, Input, Textarea, Select } from '../../../shared/FormParts';
import { useGlobalState } from '../../../global/ContextProvider';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const Page1 = ({register, watch, errors, control, next, formValue}) => {
  const [globalState, dispatch] = useGlobalState();
  const { facilityTypes, budgets, scales, services } = globalState.masters;
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
        name='facility_type'
        control={control}
        options={facilityTypes}
        defaultValue={formValue.facility_type || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.facility_type && <p>必須項目です。</p>}

      <label>*収容可能人数</label>
      <Controller
        as={Select}
        name='scale'
        control={control}
        options={scales}
        defaultValue={formValue.scale || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.scale && <p>必須項目です。</p>}

      <label>*予算</label>
      <Controller
        as={Select}
        name='budget'
        control={control}
        options={budgets}
        defaultValue={formValue.budget || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.budget && <p>必須項目です。</p>}

      <label>*提供サービス</label>
      <Controller
        as={Select}
        name='services'
        isMulti
        control={control}
        options={services}
        defaultValue={formValue.services || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.services && <p>必須項目です。</p>}

      <Button type='submit'>進む</Button>
    </Form>
  );
};

export default Page1;