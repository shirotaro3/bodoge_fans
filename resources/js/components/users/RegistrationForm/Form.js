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
        <Input name='name'
          placeholder='10文字以内'
          ref={register({
            required: '必須項目です',
            maxLength: { value: 10 , message: '「ユーザー名」は10文字以内で入力してください。' }
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <label>性別:</label>
        <Container>
          <Radio>
            <Input name='sex'
              value='male'
              type='radio'
              defaultChecked
              ref={register({ required: true })}
            />
            <label>男</label>
          </Radio>
          <Radio>
            <Input name='sex'
              value='female'
              type='radio'
              ref={register({ required: true })}
            />
            <label>女</label>
          </Radio>
          <Radio>
            <Input name='sex'
              value='other'
              type='radio'
              ref={register({ required: true })}
            />
            <label>その他</label>
          </Radio>
        </Container>

        <label>生年月日:</label>
        <Controller
          name='birthday'
          control={control}
          defaultValue={null}
          rules={{ required: '選択してください。' }}
          render={({ onChange, value, name }) => (
            <DatePicker
              onChange={date => onChange(date)}
              autoComplete='off'
              onFocus={e => e.target.readOnly = true}
              name={name}
              selected={value}
              autoComplete='off'
              placeholderText='日付を選択'
              showMonthDropdown
              showYearDropdown
              dropdownMode='select'
              locale='ja'
              dateFormat='yyyy年MM月dd日'
              maxDate={new Date()}
            />
          )}
        />
        {errors.birthday && <span>{errors.birthday.message}</span>}
        
        <label>パスワード:</label>
        <Input name='password'
          placeholder='8〜16文字の半角英数字、または記号（@&!）'
          type='password'
          ref={register({
            required: '必須項目です。',
            maxLength: { value: 16, message: '「パスワード」は16文字以内で入力してください。' },
            minLength: { value: 8, message: '「パスワード」は8文字以上で入力してください。' },
            pattern: { value: /^[a-zA-Z0-9!#$&]+$/, message: '半角英数字と「!#$&」の記号のみ使用できます。' }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label>パスワード（確認）:</label>
        <Input name='password_confirmation'
          type='password'
          ref={register({ required: '必須項目です。' })}
        />
        {errors.password_confirmation && <span>{errors.password_confirmation.message}</span>}
        
        <Button type="submit">登録</Button>
      </Form>
    </Box>
  )
};

export default Components;