import React from 'react';
import { useForm }  from 'react-hook-form';
import { FormVertical as Form, Textarea, Container } from '../../../shared/FormParts';
import { ButtonWhite as Button } from '../../../shared/Buttons';
import { useGlobalState } from '../../../global/ContextProvider';
const Edit = ({cancel, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const { register, handleSubmit, watch, errors, control, reset } = useForm();
  const onSubmit = handleSubmit( async (data) => {
    try {
      const response = await axios.put(`/api/facilities/${facilityId}`, data);
      dispatch({type: 'SET_FACILITIES', data: [response.data]});
      dispatch({type: 'MESSAGE', text: '保存しました。'});
      cancel();
    } catch (err) {
    }
  });
  return (
    <Form onSubmit={onSubmit}>
      <Textarea
        name='introduction'
        rows={3}
        maxRows={8}
        ref={register({
          required: '入力してください。',
          maxLength: { value: 500, message: '500文字以内で入力してください。'}
        })}
        defaultValue={facility.introduction}
      />
      {errors.introduction && <span>{errors.introduction.message}</span>}
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

export default Edit;