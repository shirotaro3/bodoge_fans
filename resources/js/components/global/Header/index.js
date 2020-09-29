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
  z-index: 10;
  &__strech {
    flex: 1;
    margin: 11px 0 11px 20px;
    border-top: 12px dotted #555;
    border-bottom: 12px dotted #444;
  }
`


export default StyledHeader;