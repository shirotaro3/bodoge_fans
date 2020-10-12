import React from 'react';
import { Controller } from 'react-hook-form';
import { FormVertical as Form, Input, Textarea, Select, Container } from '../../../shared/FormParts';
import { useGlobalState } from '../../../global/ContextProvider';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const Page2 = ({register, watch, errors, control, next, prev, formValue}) => {
  const [globalState, dispatch] = useGlobalState();
  const { prefectures } = globalState.masters;
  return (
    <Form onSubmit={next} className='page'>
      <label>*郵便番号</label>
      <Input
        name='postal_code'
        placeholder='半角数字7桁'
        ref={register({
          required: '必須項目です。',
          minLength: { value: 7, message: '「郵便番号」は7桁で入力してください。' },
          maxLength: { value: 7, message: '「郵便番号」は7桁で入力してください。' },
          pattern: { value: /^[0-9]+$/, message: '「郵便番号」は半角数字で入力してください。' }
        })}
        defaultValue={formValue.postal_code || ''}
      />
      {errors.postal_code && <span>{errors.postal_code.message}</span>}
      
      <label>*都道府県</label>
      <Controller
        as={Select}
        name='prefecture'
        control={control}
        options={prefectures}
        defaultValue={formValue.prefecture || ''}
        placeholder='選択してください'
        rules={{
          required: '必須項目です。'
        }}
      />
      {errors.prefecture && <span>{errors.prefecture.message}</span>}

      <label>*市区町村・番地</label>
      <Input
        name='address'
        placeholder='○○町○○1-3-19'
        ref={register({
          required: '必須項目です。',
          maxLength: { value: 50, message: '「市区町村・番地」は50文字以内で入力してください。' }
        })}
        defaultValue={formValue.address || ''}
      />
      {errors.address && <span>{errors.address.message}</span>}

      <label>建物名・部屋番号</label>
      <Input
        name='building'
        placeholder='○○ビル7F'
        ref={register({
          maxLength: {value: 25, message: '「建物名・部屋番号」は25文字以内で入力してください。'}
        })}
        defaultValue={formValue.building || ''}
      />
      {errors.building && <span>{errors.building.message}</span>}

      <label>電話番号</label>
      <Input
        name='phone_number'
        placeholder='ハイフンを含む半角英数字'
        ref={register({
          pattern: { value: /^0\d{1,4}-\d{1,4}-\d{3,4}$/, message: 'ハイフンを含めて正しく入力してください。' }
        })}
        defaultValue={formValue.phone_number || ''}
      />
      {errors.phone_number && <span>{errors.phone_number.message}</span>}

      <Container>
        <Button onClick={prev} type='button'>戻る</Button>
        {errors ? <Button type='submit'>進む</Button> : ''}
      </Container>
    </Form>
  );
};

export default Page2;