import React from 'react';
import PropTypes from 'prop-types';
import { FormVertical as Form, Input, Container, InputFile } from '../../../shared/FormParts';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const Page3 = ({register, errors, prev, submit}) => {
  return (
    <Form onSubmit={submit} className='fadein'>
      <label>ヘッダー画像</label>
      <InputFile name='header_image'
        placeholder='選択してください'
        ref={register({
          validate: {
            filesize: files => files[0].size < 3000000 || !files[0],
            filetype: files => files[0].type === 'image/jpeg' ||
            files[0].type === 'image/gif' ||
            files[0].type === 'image/png' ||
            !files[0]
          }
        })}
      />
      {errors.header_image && <span>3MB以下の「画像ファイル」のみ利用できます。</span>}

      <label>ホームページURL</label>
      <Input name='hp_url'
        placeholder='任意（例：https://bdg-fans.xyz）'
        ref={register({
          maxLength: { value: 50, message: '「ホームページURL」は50文字以内で入力してください。'}
        })}
      />
      {errors.hp_url && <span>{errors.hp_url.message}</span>}

      <label>Facebookユーザー名</label>
      <Input name='facebook'
        ref={register({
          maxLength: { value: 25, message: '「Facebookユーザー名」は25文字以内で入力してください。'}
        })}
        placeholder='任意'
      />
      {errors.facebook && <span>{errors.facebook.message}</span>}

      <label>Twitterユーザー名</label>
      <Input name='twitter'
        ref={register({
          maxLength: { value: 25, message: '「Twitterユーザー名」は25文字以内で入力してください。'}
        })}
        placeholder='任意'
      />
      {errors.twitter && <span>{errors.twitter.message}</span>}

      <label>Line@URL</label>
      <Input name='line'
        ref={register({
          maxLength: { value: 100, message: '「Line@URL」は100文字以内で入力してください。'}
        })}
        placeholder='任意'
      />
      {errors.line && <span>{errors.line.message}</span>}

      <label>Instagramユーザー名</label>
      <Input name='instagram'
        ref={register({
          maxLength: { value: 25, message: '「Instagramユーザー名」は25文字以内で入力してください。'}
        })}
        placeholder='任意'
      />
      {errors.instagram && <span>{errors.instagram.message}</span>}

      <Container>
        <Button onClick={prev} type='button'>戻る</Button>
        <Button type="submit">登録する</Button>
      </Container>
    </Form>
  );
};

Page3.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  prev: PropTypes.func,
  submit: PropTypes.func
};

export default Page3;