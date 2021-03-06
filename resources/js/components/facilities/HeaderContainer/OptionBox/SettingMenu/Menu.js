import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useGlobalState } from '../../../../global/ContextProvider';

const Menu = ({className, facilityId}) => {
  const [, dispatch] = useGlobalState();
  const history = useHistory();
  const confirmDelete = () => {
    dispatch({
      type: 'MODAL_OPEN',
      modalType: 'CONFIRM',
      title: 'お店/施設の削除',
      body: '本当に削除してもよろしいですか？',
      callback: deleteFacility
    });
  };
  const deleteFacility = async () => {
    try {
      await axios.delete(`/api/facilities/${facilityId}`);
      history.push('/users/dashboard');
      dispatch({type: 'DELETE_FACILITY', id: facilityId});
      dispatch({type: 'MESSAGE', text: '削除しました。'});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className={className}>
      <li className={`${className}__li`}>
        <Link to={`/facilities/${facilityId}/edit`} className={`${className}__link`}>設定</Link>
      </li>
      <li className={`${className}__li`} onClick={confirmDelete}>
        <span className={`${className}__link`}>削除する</span>
      </li>
    </ul>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  facilityId: PropTypes.number
};

const StyledMenu = styled(Menu)`
  width: 100px;
  background: #eee;
  position: relative;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: #333;
  border-radius: 4px;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,.3);
  ${media.lessThan('medium')`
    width: 50vw;
  `}
  &__li {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid #666;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: #ddd;
    }
  }
  &__link {
    display: block;
    padding: 8px 14px;
    text-align: center;
  }
`;

export default StyledMenu;