import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja';
import { FormVertical as Form, Input, Radio, Container } from '../../shared/FormParts';
import { ButtonWhite as Button, ButtonWhiteDisabled as ButtonDisabled } from '../../shared/Buttons';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';
import Waiting from '../../shared/Waiting';

registerLocale('ja', ja);

const Components = ({register, watch, errors, wait, onSubmit, control}) => {
  return (
    <Box>
      <h2>ユーザー登録</h2>
      <Form onSubmit={onSubmit}>
        <label>メールアドレス:</label>
        <Input name='email' placeholder='example@bdg-fans.xyz' ref={register({ required: true })} />
        {errors.email && <p>必須項目です。</p>}

        <label>ユーザー名:</label>
        <Input name='name' placeholder='1文字以内' ref={register({ required: true })} />
        {errors.name && <p>必須項目です。</p>}

        <label>性別:</label>
        <Container>
          <Radio>
            <Input name='sex' value='male' type='radio' defaultChecked ref={register({ required: true })} />
            <label>男</label>
          </Radio>
          <Radio>
            <Input name='sex' value='female' type='radio' ref={register({ required: true })} />
            <label>女</label>
          </Radio>
          <Radio>
            <Input name='sex' value='other' type='radio' ref={register({ required: true })} />
            <label>その他</label>
          </Radio>
        </Container>

        <label>生年月日:</label>
        <Controller
          as={DatePicker}
          valueName='selected'
          name='birthday'
          onChange={([selected]) => selected}
          control={control}
          autoComplete='off'
          placeholderText='日付を選択'
          defaultValue={new Date()}
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          locale='ja'
          maxDate={new Date()}
        />
        
        <label>パスワード:</label>
        <Input name='password' placeholder='8文字以上' type='password' ref={register({ required: true })} />
        {errors.password && <p>必須項目です。</p>}

        <label>パスワード（確認）:</label>
        <Input name='password_confirmation' type='password' ref={register({ required: true })} />
        {errors.password_confirmation && <p>必須項目です。</p>}
        
        {wait ? <ButtonDisabled disabled>送信中</ButtonDisabled> : <Button type="submit">登録</Button>}
      </Form>
      <Waiting wait={wait} />
    </Box>
  )
};

export default Components;