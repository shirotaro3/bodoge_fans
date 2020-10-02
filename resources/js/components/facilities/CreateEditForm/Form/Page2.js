import React from 'react';
import { Controller } from 'react-hook-form';
import { FormVertical as Form, Input, Textarea, Select, Container } from '../../../shared/FormParts';
import { useGlobalState } from '../../../global/ContextProvider';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const Page2 = ({register, watch, errors, control, next, prev, formValue}) => {
  const [globalState, dispatch] = useGlobalState();
  const prefectures = globalState.selectValues.prefectures;
  return (
    <Form onSubmit={next}>
      <label>*郵便番号</label>
      <Input
        name='postal_code'
        placeholder='半角数字7桁'
        ref={register({ required: true })}
        defaultValue={formValue.postal_code || ''}
      />
      {errors.postalcode && <p>必須項目です。</p>}
      
      <label>*都道府県</label>
      <Controller
        as={Select}
        name='m_prefecture_id'
        control={control}
        options={prefectures}
        defaultValue={formValue.m_prefecture_id || ''}
        placeholder='選択してください'
        rules={{ required: true }}
      />
      {errors.m_prefecture_id && <p>必須項目です。</p>}

      <label>*市区町村・番地</label>
      <Input
        name='address'
        placeholder='○○町○○1-3-19'
        ref={register({ required: true })}
        defaultValue={formValue.address || ''}
      />
      {errors.address && <p>必須項目です。</p>}

      <label>建物名・部屋番号</label>
      <Input
        name='building'
        placeholder='○○ビル7F'
        ref={register({ required: true })}
        defaultValue={formValue.building || ''}
      />
      {errors.building && <p>必須項目です。</p>}

      <label>電話番号</label>
      <Input
        name='phone_number'
        placeholder='ハイフンを含む半角英数字'
        ref={register({ required: true })}
        defaultValue={formValue.phone_number || ''}
      />
      {errors.phone_number && <p>必須項目です。</p>}

      <Container>
        <Button onClick={prev} type='button'>戻る</Button>
        {errors ? <Button type='submit'>進む</Button> : ''}
      </Container>
    </Form>
  );
};

export default Page2;