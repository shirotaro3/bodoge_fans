import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import { divLink } from '../../../shared/mixinCss';

const NavItem = ({to, children, icon, className}) => {
  return (
    <div className={className}>
      <div>{icon}</div>
      {children}
      <NavLink
        exact
        to={to}
        className={`${className}__link`}
        activeClassName={`${className}__activeLink`}
      ></NavLink>
    </div>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string
};

const StyledNavItem = styled(NavItem)`
  ${divLink}
  color: #fff;
  width: 110px;
  transition: .6s;
  text-align: center;
  padding-top: 7px;
  font-size: 13px;
  border-top: 7px solid #999;
  border-bottom: 2px solid #777;
  border-radius: 7px;
  &:hover{
    background: #555;
    color: #5ae;
    border-top-color: #6be;
    border-bottom-color: #6be;
  }
  ${media.lessThan('medium')`
    font-size: 10px;
    width: 33%;
    border-radius: 0;
    border-top: 5px solid #999;
    border-bottom: none;
  `}
  &__activeLink {
    background: #fff;
    opacity: .2;
    cursor: default;
  }
`;

export default StyledNavItem;