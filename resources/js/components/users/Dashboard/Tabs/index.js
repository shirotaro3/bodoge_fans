import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Switch, Route, NavLink } from 'react-router-dom';
import ForOwner from './ForOwner';
import Top from './Top';

const Tabs = ({className}) => {
  return (
    <div className={className}>
      <div className={`${className}__tabs`}>
        <NavLink
          exact
          to='/users/dashboard'
          className={`${className}__tab`}
          activeClassName={`${className}__active_tab`}
        >
          お店を利用する
        </NavLink>
        <NavLink
          to='/users/dashboard/owner'
          className={`${className}__tab`}
          activeClassName={`${className}__active_tab`}
        >
          お店を管理する
        </NavLink>
      </div>
      {/* tabルート */}
      <Switch>
        <Route exact path='/users/dashboard' component={Top} />
        <Route exact path='/users/dashboard/owner' component={ForOwner} />
      </Switch>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string
};

const StyledTabs = styled(Tabs)`
h2 {
  font-size: 20px;
  margin: 25px 0 15px 50px;
  ${media.lessThan('medium')`
    font-size: 17px;
    margin: 20px;
  `}
}
h3 {
  font-size: 17px;
  ${media.lessThan('medium')`
    font-size: 15px;
  `}
}
&__tabs {
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
}
&__tab {
  width: 50%;
  background: #555;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  display: block;
  font-size: 14px;
  transition: .3s;
  &:hover {
    background: #777;
  }
  ${media.lessThan('medium')`
    font-size: 12px;
  `}
}
&__active_tab {
  background: #888;
  &:hover {
    background: #888;
  }
}
`;

export default StyledTabs;