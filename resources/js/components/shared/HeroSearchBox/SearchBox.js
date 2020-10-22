import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import { Input, FormVertical as Form, Select, Container } from '../../shared/FormParts';
import { useForm, Controller } from 'react-hook-form';
import { useGlobalState } from '../../global/ContextProvider';
import { ButtonWhite as Button } from '../../shared/Buttons';
import queryString from 'query-string';
import { findMasterById } from '../../shared/utilities';

const SearchBox = ({className, defaultParams}) => {
  const { register, handleSubmit, control } = useForm();
  const [globalState, dispatch] = useGlobalState();
  const { prefectures, budgets, facilityTypes, scales } = globalState.masters;
  const getMasterDefaultValue = (masterCollection, defaultParam) => {
    const defaultValue = findMasterById(masterCollection, defaultParam);
    return defaultValue || '';
  };

  const onSubmit = handleSubmit ((data) => {
    const { name, prefecture, scale, facilityType, budget } = data;
    const params = { page: 1 };
    if (name) params.name = name;
    if (prefecture) params.m_prefecture_id = prefecture.value;
    if (scale) params.m_scale_id = scale.value;
    if (facilityType) params.m_facility_type_id = facilityType.value;
    if (budget) params.m_budget_id = budget.value;
    const query = queryString.stringify(params);
    dispatch({type: 'REDIRECT', to: `/facilities/search?${query}`});
  });

  return (
    <div className={className}>
      <div className={`${className}__heading`}>
        <BiSearchAlt size='30px' />
        <h2>ボードゲームが遊べるお店を探す</h2>
      </div>
      <Form onSubmit={onSubmit}>
        <label>名前で探す</label>
        <Input
          name='name'
          ref={register({
            maxLength: { value: 20, message: '20文字以内で入力してください。' }
          })}
          defaultValue={defaultParams.name || ''}
        />

        <Container>
          <div className={`${className}__container_half`}>
            <Controller
              as={Select}
              name='prefecture'
              control={control}
              options={prefectures}
              placeholder='地域'
              defaultValue={getMasterDefaultValue(prefectures, defaultParams.m_prefecture_id)}
              isClearable
            />
          </div>
          <div className={`${className}__container_half`}>
            <Controller
              as={Select}
              name='scale'
              control={control}
              options={scales}
              placeholder='収容規模'
              defaultValue={getMasterDefaultValue(scales, defaultParams.m_scale_id)}
              isClearable
            />
          </div>
        </Container>

        <Container>
          <div className={`${className}__container_half`}>
            <Controller
              as={Select}
              name='budget'
              control={control}
              options={budgets}
              placeholder='予算'
              defaultValue={getMasterDefaultValue(budgets, defaultParams.m_budget_id)}
              isClearable
            />
          </div>
          <div className={`${className}__container_half`}>
            <Controller
              as={Select}
              name='facilityType'
              control={control}
              options={facilityTypes}
              placeholder='タイプ'
              defaultValue={getMasterDefaultValue(facilityTypes, defaultParams.m_facility_type_id)}
              isClearable
            />
          </div>
        </Container>

        <Button>
          検索
        </Button>
      </Form>
    </div>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string,
  defaultParams: PropTypes.object
};

const StyledSearchBox = styled(SearchBox)`
  background: rgba(0,0,0,.4);
  color: #eee;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  &__heading {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
  &__container_half {
    width: 50%;
  }
`;

export default StyledSearchBox;