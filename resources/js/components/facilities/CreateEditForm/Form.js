import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja';
import { FormVertical as Form, Input, Textarea, InputFile } from '../../shared/FormParts';
import { ButtonWhite as Button, ButtonWhiteDisabled as ButtonDisabled } from '../../shared/Buttons';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';
import Waiting from '../../shared/Waiting';

registerLocale('ja', ja);

const Components = ({register, watch, errors, wait, onSubmit, control}) => {
  return (
    <Box>
      <h2>お店/施設の登録</h2>
      <Form onSubmit={onSubmit}>
        <label>*施設名</label>
        <Input name='name' placeholder='example@bdg-fans.xyz' ref={register({ required: true })} />
        {errors.name && <p>必須項目です。</p>}

        <label>*簡単な紹介</label>
        <Textarea name='description' placeholder='1文字以内' rows={3} maxRows={6} ref={register({ required: true })} />
        {errors.description && <p>必須項目です。</p>}

        <label>お店の写真[任意]</label>
        <InputFile name='image' ref={register({ required: true })} placeholder='ファイルを選択' />
        {errors.image && <p>必須項目です。</p>}

        
        
        {wait ? <ButtonDisabled disabled>通信中</ButtonDisabled> : <Button type="submit">登録</Button>}
      </Form>
      <Waiting wait={wait} />
    </Box>
  )
};

export default Components;