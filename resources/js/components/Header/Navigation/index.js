import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { mixinIsShownTablet } from '../../shared/StyledCss';
import { BsSearch, BsFillCalendarFill, BsChatDots } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const items = [
  {
    to: '/search',
    text: 'お店を探す',
    icon: <BsSearch />
  },
  {
    to: '/users/registration',
    text: 'イベント情報',
    icon: <BsFillCalendarFill />
  },
  {
    to: '/review',
    text: 'クチコミ',
    icon: <BsChatDots />
  }
]

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
  ${mixinIsShownTablet}
  display: flex;
  margin-left: 20px;
`

export default StyledNavigation;