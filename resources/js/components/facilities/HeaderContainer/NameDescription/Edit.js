import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm }  from 'react-hook-form';
import { FormVertical as Form, Input, Textarea, Container } from '../../../shared/FormParts';
import { ButtonWhite as Button } from '../../../shared/Buttons';
import { useGlobalState } from '../../../global/ContextProvider';

const Edit = ({cancel, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = handleSubmit( async (data) => {
    try {
      const response = await axios.put(`/api/facilities/${facilityId}`, data);
      dispatch({type: 'SET_FACILITIES', data: [response.data]});
      dispatch({type: 'MESSAGE', text: '保存しました。'});
      cancel();
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <Form onSubmit={onSubmit}>
      <Input name='name'
        ref={register({
          required: '入力してください。',
          maxLength: { value: 15, message: '15文字以内で入力してください。' }
        })}
        defaultValue={facility.name}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <Textarea
        name='description'
        rows={3}
        maxRows={8}
        ref={register({
          required: '入力してください。',
          maxLength: { value: 50, message: '50文字以内で入力してください。'}
        })}
        defaultValue={facility.description}
      />
      {errors.description && <span>{errors.description.message}</span>}
      <Container>
        <Button>
          保存
        </Button>
        <Button type='button' onClick={cancel}>
          キャンセル
        </Button>
      </Container>
    </Form>
  );
};

Edit.propTypes = {
  cancel: PropTypes.func,
  facilityId: PropTypes.number
};

export default Edit;