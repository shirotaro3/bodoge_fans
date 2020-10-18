import React from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import _ from 'lodash';
import { FormVertical as Form, Input, Select, Container } from '../../shared/FormParts';
import { BoxRoundedBlack as Box } from '../../shared/Boxes';
import { ButtonWhite as Button } from '../../shared/Buttons';
import { LinkButtonWhite as LinkButton } from '../../shared/Links';
import { useGlobalState } from '../../global/ContextProvider';

const EditForm = ({facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const { register, handleSubmit, errors, control } = useForm();
  const { facilityTypes, budgets, scales, services, prefectures } = globalState.masters;
  const facility = globalState.facilities.data[facilityId];
  const defaultFacilityType = _.find(facilityTypes, o => o.value === facility.m_facility_type_id);
  const defaultBudget = _.find(budgets, o => o.value === facility.m_budget_id);
  const defaultScale = _.find(scales, o => o.value === facility.m_scale_id);
  const defaultServices = facility.m_services.map(o => ({value: o.id, label: o.detail}));
  const defaultPrefecture = _.find(prefectures, o => o.value === facility.m_prefecture_id);
  const onSubmit = handleSubmit( async (data) => {
    try {
      const submitData = {
        ...data,
        m_budget_id: data.budget.value,
        m_facility_type_id: data.facility_type.value,
        m_scale_id: data.scale.value,
        m_service_ids: data.services.map(o => o.value),
        m_prefecture_id: data.prefecture.value
      }
      dispatch({type: 'API_CALL_START'});
      const response = await axios.put(`/api/facilities/${facilityId}`, submitData);
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'SET_FACILITIES', data: [response.data]});
      dispatch({type: 'REDIRECT', to: `/facilities/${facilityId}`});
      dispatch({type: 'MESSAGE', text: '保存しました。'});
    } catch (err) {
      console.log(err);
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'ALERT', text: '処理に失敗しました。'});
    }
  });
  return (
    <Box>
      <h2>設定</h2>
      <Form onSubmit={onSubmit}>

      <label>*お店/施設のタイプ</label>
      <Controller
        as={Select}
        name='facility_type'
        control={control}
        options={facilityTypes}
        placeholder='選択してください'
        rules={{ required: true }}
        defaultValue={defaultFacilityType}
      />
      {errors.facility_type && <span>選択してください。</span>}

      <label>*収容可能人数</label>
      <Controller
        as={Select}
        name='scale'
        control={control}
        options={scales}
        placeholder='選択してください'
        rules={{ required: true }}
        defaultValue={defaultScale}
      />
      {errors.scale && <span>選択してください。</span>}

      <label>*予算</label>
      <Controller
        as={Select}
        name='budget'
        control={control}
        options={budgets}
        placeholder='選択してください'
        rules={{ required: true }}
        defaultValue={defaultBudget}
      />
      {errors.budget && <span>選択してください。</span>}

      <label>*提供サービス[複数選択]</label>
      <Controller
        as={Select}
        name='services'
        isMulti
        control={control}
        options={services}
        placeholder='選択してください'
        rules={{ required: true }}
        defaultValue={defaultServices}
      />
      {errors.services && <span>選択してください。</span>}

      <label>*都道府県</label>
      <Controller
        as={Select}
        name='prefecture'
        control={control}
        options={prefectures}
        placeholder='選択してください'
        rules={{ required: true }}
        defaultValue={defaultPrefecture}
      />
      {errors.prefecture && <span>選択してください。</span>}

      <label>*市区町村・番地</label>
      <Input
        name='address'
        placeholder='○○町○○1-3-19'
        ref={register({
          required: '必須項目です。',
          maxLength: { value: 50, message: '「市区町村・番地」は50文字以内で入力してください。' }
        })}
        defaultValue={facility.address}
      />
      {errors.address && <span>{errors.address.message}</span>}

      <label>建物名・部屋番号</label>
      <Input
        name='building'
        placeholder='○○ビル7F'
        ref={register({
          maxLength: {value: 25, message: '「建物名・部屋番号」は25文字以内で入力してください。'}
        })}
        defaultValue={facility.building}
      />
      {errors.building && <span>{errors.building.message}</span>}

      <label>電話番号</label>
      <Input
        name='phone_number'
        placeholder='ハイフンを含む半角英数字'
        ref={register({
          pattern: { value: /^0\d{1,4}-\d{1,4}-\d{3,4}$/, message: 'ハイフンを含めて正しく入力してください。' }
        })}
        defaultValue={facility.phone_number}
      />
      {errors.phone_number && <span>{errors.phone_number.message}</span>}

      <label>ホームページURL</label>
      <Input name='hp_url'
        placeholder='任意（例：https://bdg-fans.xyz）'
        ref={register({
          maxLength: { value: 50, message: '「ホームページURL」は50文字以内で入力してください。'}
        })}
        defaultValue={facility.hp_url}
      />
      {errors.hp_url && <span>{errors.hp_url.message}</span>}

        <label>Facebookユーザー名</label>
        <Input name='facebook'
          ref={register({
            maxLength: { value: 25, message: '「Facebookユーザー名」25文字以内で入力してください。'}
          })}
          placeholder='任意'
          defaultValue={facility.facebook}
        />
        {errors.facebook && <span>{errors.facebook.message}</span>}

        <label>Twitterユーザー名</label>
        <Input name='twitter'
          ref={register({
            maxLength: { value: 25, message: '「Facebookユーザー名」25文字以内で入力してください。'}
          })}
          placeholder='任意'
          defaultValue={facility.twitter}
        />
        {errors.twitter && <span>{errors.twitter.message}</span>}

        <label>Line@URL</label>
        <Input name='line'
          ref={register({
            maxLength: { value: 25, message: '「Line@URL」25文字以内で入力してください。'}
          })}
          placeholder='任意'
          defaultValue={facility.line}
        />
        {errors.line && <span>{errors.line.message}</span>}

        <label>Instagramユーザー名</label>
        <Input name='instagram'
          ref={register({
            maxLength: { value: 25, message: '「Instagramユーザー名」25文字以内で入力してください。'}
          })}
          placeholder='任意'
          defaultValue={facility.instagram}
        />
        {errors.instagram && <span>{errors.instagram.message}</span>}
        <Container>
          <Button type='submit'>保存</Button>
          <LinkButton to={`/facilities/${facilityId}`}>保存せずに戻る</LinkButton>
        </Container>
      </Form>
    </Box>
  );
};

export default EditForm;