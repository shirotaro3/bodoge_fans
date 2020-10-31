import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import NavItem from './NavItem';
import { BsSearch, BsFillCalendarFill, BsChatDots } from 'react-icons/bs';
import GoBackButton from './GoBackButton';
import ReloadButton from './ReloadButton';

const items = [
  {
    to: '/',
    text: 'お店を探す',
    icon: BsSearch
  },
  {
    to: '/events',
    text: 'イベント情報',
    icon: BsFillCalendarFill
  },
  {
    to: '/reviews',
    text: 'クチコミ',
    icon: BsChatDots
  }
];

const Navigation = ({className}) => {
  return (
    <div className={className}>
      <GoBackButton />
      {
        items.map((item) => {
          return (
            <NavItem
              to={item.to}
              key={item.to}
              icon={item.icon}
            >{item.text}</NavItem>);
        })
      }
      <ReloadButton />
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string
};

const StyledNavigation = styled(Navigation)`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  ${media.lessThan('medium')`
    padding-top: 10px;
    margin: 0;
  `}
  ${media.lessThan('small')`
    padding: 0;
    margin: 0;
    background: #333;
  `}
`;

export default StyledNavigation;