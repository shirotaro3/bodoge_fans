import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import LoginBox from './LoginBox';

const Header = ({className}) => {
  return (
    <div className={className}>
      <Logo logoText="BodogeFans" subText="ボードゲームを愛する人とお店のポータルサイト" />
      <Navigation />
      <LoginBox />
    </div>
  );
}

const StyledHeader = styled(Header)`
  display: flex;
  color: #fff;
  background: #333;
  padding: 10px;
  height: 80px;
  margin: 0;
`


export default StyledHeader;