import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { HashLink } from 'react-router-hash-link';
import { divLink } from '../../shared/mixinCss';

const NavTop = ({className}) => {
  return (
    <div className={className}>
      ページ上部へ戻る
      <HashLink smooth to='#nav-top' className={`${className}__link`}></HashLink>
    </div>
  );
};

NavTop.propTypes = {
  className: PropTypes.string
};

const StyledNavTop = styled(NavTop)`
  ${divLink}
  height: 47px;
  background: #444;
  color: #fff;
  text-align: center;
  padding: 13px 10px;
  &:hover {
    background: #555;
  }
  ${media.lessThan('medium')`
    height: 40px;
  `}
  ${media.lessThan('small')`
    display: none;
  `}
`;

export default StyledNavTop;