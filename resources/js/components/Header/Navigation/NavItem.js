import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mixinDivLink } from '../../shared/StyledCss';

const NavItem = ({to, children, className}) => {
  return (
    <div className={className}>
      {children}
      <NavLink
        to={to}
        className={`${className}__link`}
        activeClassName={`${className}__activeLink`}
      ></NavLink>
    </div>
  );
}

const StyledNavItem = styled(NavItem)`
  ${mixinDivLink}
  width: 110px;
  transition: .6s;
  text-align: center;
  padding-top: 19px;
  font-size: 15px;
  border-top: 7px solid #999;
  border-bottom: 2px solid #999;
  border-radius: 7px;
  ${StyledNavItem}:hover&{
    background: #555;
    color: #5ae;
    border-top-color: #6be;
    border-bottom-color: #6be;
  }
  &__activeLink {
    background: #fff;
    opacity: .2;
    cursor: default;
  }
`

export default StyledNavItem;