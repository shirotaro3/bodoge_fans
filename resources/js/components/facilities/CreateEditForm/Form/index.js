import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja';
import { Progress } from '../../../shared/FormParts';
import { BoxRoundedBlack as Box } from '../../../shared/Boxes';
import Waiting from '../../../shared/Waiting';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

registerLocale('ja', ja);
// props: { register, watch, errors, wait, onSubmit, control, handleSubmit, setFormValue, formValue }
const Components = props => {
  const [currentPage, setCurrentPage] = useState(1);

  // 進むを押した時の処理
  const next = props.handleSubmit((data) => {
    props.setFormValue({...props.formValue, ...data});
    setCurrentPage(currentPage + 1);
  });
  // 戻るを押したときの処理
  const prev = () => {
    setCurrentPage(currentPage - 1);
  };
  const steps = ['1.基本情報', '2.住所', '3.その他'];
  // ページネーション　もっと簡潔な書き方が出来そう
  const pagination = () => {
    switch(currentPage) {
      case 1:
        { return <Page1 {...props} next={next} />;};
      case 2:
        { return <Page2 {...props} next={next} prev={prev} />;};
      case 3:
        { return <Page3 {...props} prev={prev} />;};
      default:
        return;
    }
  };
  return (
    <Box>
      <h2>お店/施設の登録</h2>
      <p>*は必須項目です。登録情報は全て公開されます。</p>
        <Progress steps={steps} current={currentPage} />
        {pagination()}
      <Waiting wait={props.wait} />
    </Box>
  )
};

export default Components;