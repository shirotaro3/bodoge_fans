import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Form from './Form';
import { useGlobalState } from '../../../../global/ContextProvider';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const ReviewForm = ({facilityId}) => {
  const { register, handleSubmit, watch, errors, control, reset } = useForm();
  const [globalState, dispatch] = useGlobalState();

  // Submit時の処理
  const onSubmit = handleSubmit((data) => {
    const postReview = async () => {
      try {
        const submitData = {
          ...data,
          facility_id: facilityId
        }
        dispatch({type: 'API_CALL_START'});
        const response = await axios.post(`/api/reviews`,submitData);
        reset();
        dispatch({type: 'API_CALL_END'});
        dispatch({type: 'SET_REVIEW', data: response.data});
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        dispatch({type: 'MESSAGE', text: 'レビューを投稿しました。'});
      } catch (err) {
        dispatch({type: 'API_CALL_END'});
        dispatch({type: 'ALERT', text: '処理に失敗しました。再度お試しください。'});
      }
    }
    const modalText = <div>
        以下の内容でレビューを送信します。<br/>
        <hr />
        タイトル<br />
        {data.title}<br />
        本文<br />
        {data.body}<br />
        <hr />
        よろしければ「はい」を選択してください。
      </div>;
    dispatch({
      type: 'MODAL_OPEN',
      title: 'レビューの投稿',
      body: modalText,
      callback: postReview
    }); 
  });
  
  return (
    <Form
      register={register}
      watch={watch}
      errors={errors}
      onSubmit={onSubmit}
      control={control}
    />
  )
};

export default ReviewForm;