import React from 'react';
import { FormVertical as Form, Input, Container } from '../../../shared/FormParts';
import { ButtonWhite as Button, ButtonWhiteDisabled as ButtonDisabled } from '../../../shared/Buttons';

const Page3 = ({register, watch, errors, control, wait, prev, submit}) => {
  return (
    <Form onSubmit={submit}>
      <label>ホームページURL</label>
      <Input name='hp_url' placeholder='https://bdg-fans.xyz' ref={register()} />
      {errors.hp_url && <p>必須項目です。</p>}

      <label>Facebookアカウント</label>
      <Input name='facebook' ref={register()} />
      {errors.facebook && <p>必須項目です。</p>}

      <label>Twitterアカウント</label>
      <Input name='twitter' ref={register()} />
      {errors.twitter && <p>必須項目です。</p>}

      <label>Line@アカウント</label>
      <Input name='line' ref={register()} />
      {errors.line && <p>必須項目です。</p>}

      <label>Instagramアカウント</label>
      <Input name='instagram' ref={register()} />
      {errors.instagram && <p>必須項目です。</p>}

      {wait
      ? <ButtonDisabled disabled>通信中</ButtonDisabled>
      : <Container>
          <Button onClick={prev} type='button'>戻る</Button>
          <Button type="submit">確認画面へ</Button>
        </Container>
      }
    </Form>
  );
};

export default Page3;