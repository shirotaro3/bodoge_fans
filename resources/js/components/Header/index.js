import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Header = ({className}) => {
  return (
    <div className={className}>
      <Logo logoText="BodogeFans" subText="ボードゲームを愛する人とお店を繋ぐポータルサイト" />
    </div>
  );
}

const StyledHeader = styled(Header)`
  color: #fff;
  background: #333;
  padding: 10px;
  height: 80px;
  margin: 0;
`


export default StyledHeader;