import React from 'react';
import { FormVertical as Form, Input } from '../../shared/FormParts';
import { ButtonWhite as Button } from '../../shared/Buttons';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';

const LoginForm = () => {
  return (
    <Box>
      <h2>ユーザーログイン</h2>
      <Form>
        <label>Email:</label>
        <Input />
        <label>Password:</label>
        <Input />
        <Button>ログイン</Button>
      </Form>
    </Box>
  );
}

export default LoginForm;