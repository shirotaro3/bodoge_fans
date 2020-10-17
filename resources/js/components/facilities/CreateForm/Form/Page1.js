import React from 'react';
import { Controller } from 'react-hook-form';
import { FormVertical as Form, Input, Textarea, Select } from '../../../shared/FormParts';
import { useGlobalState } from '../../../global/ContextProvider';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const Page1 = ({register, errors, control, next, formValue}) => {
  const [globalState, dispatch] = useGlobalState();
  const { facilityTypes, budgets, scales, services } = globalState.masters;
  return (
    <Form onSubmit={next} className='fadein'>
      <label>*お店/施設名</label>
      <Input
        name='name'
        placeholder='15文字以内'
        ref={register({
          required: '必須項目です。',
          maxLength: { value: 15, message: '「お店/施設名」は15文字以内で入力してください。'},
        })}
        defaultValue={formValue.name || ''}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label>*簡単な紹介</label>
      <Textarea
        name='description'
        placeholder='50文字以内'
        rows={3}
        maxRows={6}
        ref={register({
          required: '必須項目です。',
          maxLength: { value: 50, message: '「簡単な紹介」は50文字以内で入力してください。' }
        })}
        defaultValue={formValue.description || ''}
      />
      {errors.description && <span>{errors.description.message}</span>}

      <label>フリーコメント・紹介文</label>
      <Textarea
        name='introduction'
        placeholder='500文字以内[任意]'
        rows={5}
        maxRows={10}
        ref={register({
          maxLength: { value: 50, message: '「フリーコメント・紹介文」は500文字以内で入力してください。' }
        })}
        defaultValue={formValue.introduction || ''}
      />
      {errors.introduction && <span>{errors.introduction.message}</span>}

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
      {errors.facility_type && <span>必須項目です。</span>}

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
      {errors.scale && <span>必須項目です。</span>}

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
      {errors.budget && <span>必須項目です。</span>}

      <label>*提供サービス[複数選択]</label>
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
      {errors.services && <span>必須項目です。</span>}

      <Button type='submit'>進む</Button>
    </Form>
  );
};

export default Page1;