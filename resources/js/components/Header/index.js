import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import LoginBox from './LoginBox';

const Header = ({className}) => {
  return (
    <header className={className} id='nav-top'>
      <Logo logoText="BodogeFans" subText="ボードゲームを愛する人とお店のポータルサイト" />
      <Navigation />
      <div className={`${className}__strech`}></div>
      <LoginBox />
    </header>
  );
}

const StyledHeader = styled(Header)`
  display: flex;
  color: #fff;
  background: #333;
  padding: 10px 20px;
  height: 80px;
  margin: 0;
  &__strech {
    flex: 1;
    margin: 13px 0 13px 20px;
    border-top: 8px dashed #444;
    border-bottom: 8px dashed #444;
  }
`


export default StyledHeader;