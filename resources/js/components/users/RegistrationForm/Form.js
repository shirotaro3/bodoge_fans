import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja';
import { FormVertical as Form, Input, Radio, Container } from '../../shared/FormParts';
import { ButtonWhite as Button, ButtonWhiteDisabled as ButtonDisabled } from '../../shared/Buttons';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';

registerLocale('ja', ja);

const Components = ({register, watch, errors, onSubmit, control}) => {
  return (
    <Box>
      <h2>ユーザー登録</h2>
      <Form onSubmit={onSubmit}>
        <label>メールアドレス:</label>
        <Input name='email'
          placeholder='example@bdg-fans.xyz'
          ref={register({
            required: '必須項目です。',
            pattern: { value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/, message: '正しいメールアドレスを入力してください。'}
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label>ユーザー名:</label>
        <Input name='name' placeholder='1文字以内' ref={register({ required: true })} />
        {errors.name && <span>{errors.name.message}</span>}

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
        {errors.password && <span>必須項目です。</span>}

        <label>パスワード（確認）:</label>
        <Input name='password_confirmation' type='password' ref={register({ required: true })} />
        {errors.password_confirmation && <span>必須項目です。</span>}
        
        <Button type="submit">登録</Button>
      </Form>
    </Box>
  )
};

export default Components;