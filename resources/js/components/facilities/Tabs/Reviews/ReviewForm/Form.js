import React from 'react';
import PropTypes from 'prop-types';
import { FormVertical as Form, Input, Textarea } from '../../../../shared/FormParts';
import { ButtonWhite as Button } from '../../../../shared/Buttons';

const ReviewFormComponent = ({register, errors, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      <label>タイトル（25文字以内）</label>
      <Input name='title'
        ref={register({
          required: '「タイトル」を入力してください。',
          maxLength: { value: 25, message: '「タイトル」は25文字以内で入力してください。' }
        })}
      />
      {errors.title && <span>{errors.title.message}</span>}

      <label>本文（300文字以内）</label>
      <Textarea name='body'
        rows={5}
        maxRows={10}
        ref={register({
          required: '「本文」を入力してください。',
          maxLength: { value: 300, message: '「本文」は300文字以内で入力してください。' },
          minLength: { value: 10, message: '「本文」は10文字以上お書きください。' }
        })}
      />
      {errors.body && <span>{errors.body.message}</span>}
      <Button type='submit'>投稿する</Button>
    </Form>
  );
};

ReviewFormComponent.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  onSubmit: PropTypes.func
};

export default ReviewFormComponent;