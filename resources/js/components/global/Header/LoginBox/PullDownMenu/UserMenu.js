import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../../ContextProvider';

const UserMenu = ({className}) => {
  const [ , dispatch] = useGlobalState();
  const handleClick = (e) => {
    dispatch({
      type: 'MODAL_OPEN',
      title: 'ログアウト',
      body: 'ログアウトしてもよろしいですか？',
      callback: () => dispatch({type: 'REDIRECT', to: '/users/logout'})
    });
    // ClickEventの伝播を停止 モーダルが開くと同時にオーバーレイをクリックするのを防ぐ
    e.stopPropagation();
  };
  return (
    <ul className={className}>
      <li className={`${className}__li`}>
        <Link  to='/users/dashboard' className={`${className}__link`}>ダッシュボード</Link>
      </li>
      <li className={`${className}__li`}>
        <Link  to='/users/likes' className={`${className}__link`}>お気に入り</Link>
      </li>
      <li className={`${className}__li`}>
        <span onClick={handleClick} className={`${className}__link`}>ログアウト</span>
      </li>
    </ul>
  );
};

UserMenu.propTypes = {
  className: PropTypes.string
};

const StyledUserMenu = styled(UserMenu)`
  background: #eee;
  min-width: 140px;
  position: relative;
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
    &:hover {
      background: #ddd;
    }
  }
  &__link {
    display: block;
    padding: 8px 0;
    text-align: center;
    cursor: pointer;
  }
`;

export default StyledUserMenu;