import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';
import { divLink } from '../../shared/mixinCss';

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
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  logoText: PropTypes.string,
  subText: PropTypes.string
};

const StyledLogo = styled(Logo)`
  ${divLink}
  width: 270px;
  padding: 3px 0;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
  transition: .6s;
  cursor: pointer;
  ${media.lessThan('small')`
    flex: 1;
    width: auto;
  `}
  ${StyledLogo}:hover&{
    background: #555;
    color: #fc7;
    border-color: #ff9;
  }
  &__mainText {
    font-size: 24px;
    margin: 0;
    ${media.lessThan('medium')`
      font-size: 18px;
    `}
  }
  &__subText {
    font-size: 10px;
    margin: 0;
    ${media.lessThan('medium')`
      font-size: 8px;
    `}
  }
`;

export default StyledLogo;