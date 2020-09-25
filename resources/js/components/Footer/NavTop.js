import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { mixinDivLink } from '../shared/StyledCss';

const NavTop = ({className}) => {
  return (
    <div className={className}>
      ページ上部へ戻る
      <HashLink smooth to='#nav-top' className={`${className}__link`}></HashLink>
    </div>
  );
}

const StyledNavTop = styled(NavTop)`
  ${mixinDivLink}
  height: 47px;
  background: #444;
  color: #fff;
  text-align: center;
  padding: 13px 10px;
  &:hover {
    background: #555;
  }
`

export default StyledNavTop;