import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserMenu = ({className}) => {
  return (
    <ul className={className}>
      <li className={`${className}__li`}>
        <Link  to='/users/dashboard' className={`${className}__link`}>ダッシュボード</Link>
      </li>
      <li className={`${className}__li`}>
        <Link  to='/users/likes' className={`${className}__link`}>お気に入り</Link>
      </li>
      <li className={`${className}__li`}>
        <Link to='/users/logout' className={`${className}__link`}>ログアウト</Link>
      </li>
    </ul>
  );
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
  }
`;

export default StyledUserMenu;