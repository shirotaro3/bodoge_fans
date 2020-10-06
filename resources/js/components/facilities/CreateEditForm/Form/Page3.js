import React from 'react';
import { FormVertical as Form, Input, Container, InputFile } from '../../../shared/FormParts';
import { ButtonWhite as Button, ButtonWhiteDisabled as ButtonDisabled } from '../../../shared/Buttons';

const Page3 = ({register, watch, errors, control, wait, prev, submit}) => {
  return (
    <Form onSubmit={submit} enctype='multipart/form-data'>
      <label>ヘッダー画像</label>
      <InputFile name='header_image' placeholder='選択してください' ref={register()} />
      {errors.header_image && <p>必須項目です。</p>}

      <label>ホームページURL</label>
      <Input name='hp_url' placeholder='任意（例：https://bdg-fans.xyz）' ref={register()} />
      {errors.hp_url && <p>必須項目です。</p>}

      <label>Facebookアカウント</label>
      <Input name='facebook' ref={register()} placeholder='任意' />
      {errors.facebook && <p>必須項目です。</p>}

      <label>Twitterアカウント</label>
      <Input name='twitter' ref={register()} placeholder='任意' />
      {errors.twitter && <p>必須項目です。</p>}

      <label>Line@アカウント</label>
      <Input name='line' ref={register()} placeholder='任意' />
      {errors.line && <p>必須項目です。</p>}

      <label>Instagramアカウント</label>
      <Input name='instagram' ref={register()} placeholder='任意' />
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