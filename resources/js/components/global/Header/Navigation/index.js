import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import NavItem from './NavItem';
import { BsSearch, BsFillCalendarFill, BsChatDots } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const items = [
  {
    to: '/',
    text: 'お店を探す',
    icon: <BsSearch />
  },
  {
    to: '/events',
    text: 'イベント情報',
    icon: <BsFillCalendarFill />
  },
  {
    to: '/reviews',
    text: 'クチコミ',
    icon: <BsChatDots />
  }
];

const Navigation = ({className}) => {
  return (
    <div className={className}>
      <IconContext.Provider value={{ size: 18, style: { margin: '0 auto 4px auto' } }}>
        {
          items.map((item) => {
            return (
              <NavItem
                to={item.to}
                key={item.to}
                icon={item.icon}
              >{item.text}</NavItem>)
          })
        }
      </IconContext.Provider>
    </div>
  );
}

const StyledNavigation = styled(Navigation)`
  display: flex;
  margin-left: 20px;
  ${media.lessThan('medium')`
    padding: 10px 0;
    margin: 0;
  `}
`

export default StyledNavigation;