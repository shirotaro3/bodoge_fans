import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = ({ className, logoText, subText }) => {
  return (
    <div className={className}>
      <h1 className={`${className}__mainText`}>
        {logoText}
      </h1>
      <p className={`${className}__subText`}>
        {subText}
      </p>
      <Link to='/' className={`${className}__link`}> </Link>
    </div>
  )
}

const StyledLogo = styled(Logo)`
  width: 270px;
  padding: 3px 0;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
  transition: .6s;
  position: relative;
  cursor: pointer;

  ${StyledLogo}:hover&{
    background: #555;
    color: #fc7;
    border-color: #ff9;
  }
  &__mainText {
    font-size: 25px;
    margin: 0;
  }
  &__subText {
    font-size: 10px;
    margin: 0;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

export default StyledLogo;