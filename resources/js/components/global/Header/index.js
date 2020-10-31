import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import Logo from './Logo';
import Navigation from './Navigation';
import LoginBox from './LoginBox';
import { isHiddenTablet, isHiddenMobile } from '../../shared/mixinCss';

const Header = ({className}) => {
  return (
    <header className={className}>
      <nav>
        <div className={`${className}__flex`}>
          <Logo logoText="BodogeFans" subText="ボードゲームを愛する人とお店のポータルサイト" />
          <div className={`${className}__hidden_tablet`}>
            <Navigation />
          </div>
          <div className={`${className}__strech`}></div>
          <LoginBox />
        </div>
        <div className={`${className}__show_tablet_only`}>
          <Navigation />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

const StyledHeader = styled(Header)`
  color: #fff;
  padding: 10px 20px;
  background: #333;
  height: 80px;
  margin: 0;
  z-index: 30;
  ${media.lessThan('medium')`
    height: 125px;
    padding: 10px 0;
  `}
  ${media.lessThan('small')`
    height: 0;
    padding: 57px 0 0 0;
    background: none;
  `}
  ${media.lessThan('324px')`
    height: 0;
    padding: 73px 0 0 0;
  `}
  &__flex {
    display: flex;
    align-items: center;
    ${media.lessThan('small')`
      position: fixed;
      top: 0;
      width: 100%;
      padding: 5px 0;
      background: #333;
    `}
  }
  &__strech {
    ${isHiddenMobile}
    flex: 1;
    margin: 11px 0 11px 20px;
    height: 33px;
    border-top: 12px dotted #555;
    border-bottom: 12px dotted #444;
  }
  &__hidden_tablet {
    ${isHiddenTablet}
  }
  &__show_tablet_only {
    display: none;
    ${media.lessThan('medium')`
      display: block;
    `}
    ${media.lessThan('small')`
      position: fixed;
      bottom: 0;
      width: 100%;
      background: none;
      /* androidソフトウェアキーボードに対応 */
      @media(max-height: 500px) {
        display: none;
      }
    `}
  }
`;


export default StyledHeader;