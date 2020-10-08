import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useGlobalState } from '../../../../global/ContextProvider';

const Menu = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const confirmDelete = () => {
    dispatch({
      type: 'MODAL_OPEN',
      modalType: 'CONFIRM',
      text: 'この施設またはお店を本当に削除してもよろしいですか？',
      callback: deleteFacility
    });
  };
  const deleteFacility = async () => {
    try {
      dispatch({type: 'API_CALL_START'});
      const response = await axios.delete('/api/facilities/delete', { id: facilityId });
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'DELETE_FACILITY', id: facilityId});
      dispatch({type: 'MESSAGE', text: '削除しました。'});
      dispatch({type: 'REDIRECT', to: '/users/dashboard' });
    } catch (err) {
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'ALERT', text: '処理に失敗しました。再度お試しください。'});
    }
  };

  return (
    <ul className={className}>
      <li className={`${className}__li`} onClick={confirmDelete}>
        <span className={`${className}__link`}>削除する</span>
      </li>
    </ul>
  );
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