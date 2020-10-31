import React from 'react';
import { FormVertical as Form, Input } from '../../shared/FormParts';
import { ButtonWhite as Button } from '../../shared/Buttons';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';

const Components = ({register, watch, errors, onSubmit}) => {
  return (
    <Box>
      <h2>ログイン</h2>
      <Form onSubmit={onSubmit}>
        <label>メールアドレス:</label>
        <Input name='email' ref={register({ required: true })} />
        {errors.email && <span>入力してください。</span>}
        
        <label>パスワード:</label>
        <Input name='password' type='password' ref={register({ required: true })} />
        {errors.password && <span>入力してください。</span>}

        <Button type="submit">認証</Button>
      </Form>
    </Box>
  )
};

export default Components;