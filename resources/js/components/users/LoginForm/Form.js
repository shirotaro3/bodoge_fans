import React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { FormVertical as Form, Input, Radio, Container } from '../../shared/FormParts';
import { ButtonWhite as Button, ButtonWhiteDisabled as ButtonDisabled } from '../../shared/Buttons';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';
import Waiting from '../../shared/Waiting';

const Components = ({register, watch, errors, wait, onSubmit}) => {
  return (
    <Box>
      <h2>ログイン</h2>
      <Form onSubmit={onSubmit}>
        <label>メールアドレス:</label>
        <Input name='email' ref={register({ required: true })} />
        {errors.email && <p>入力してください。</p>}
        
        <label>パスワード:</label>
        <Input name='password' type='password' ref={register({ required: true })} />
        {errors.password && <p>入力してください。</p>}

        {wait ? <ButtonDisabled disabled>通信中</ButtonDisabled> : <Button type="submit">認証</Button>}
      </Form>
      <Waiting wait={wait} />
    </Box>
  )
};

export default Components;