import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { mixinIsShownTablet } from '../../shared/StyledCss';

const items = [
  {
    to: '/users/registration',
    text: '新規登録'
  },
  {
    to: '/users/mypage',
    text: 'Mypage'
  }
]

const Navigation = ({className}) => {
  return (
    <div className={className}>
      {
        items.map((item) => {
          return <NavItem to={item.to} key={item.to}>{item.text}</NavItem>
        })
      }
    </div>
  );
}

const StyledNavigation = styled(Navigation)`
  ${mixinIsShownTablet}
  display: flex;
  margin-left: 20px;
`

export default StyledNavigation;