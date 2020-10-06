import React from 'react';
import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';
import Access from './Access';
import Reviews from './Reviews';

const Tabs = ({className, facilityId}) => {
  return (
    <div className={className}>
      <div className={`${className}__tabs`}>
        <NavLink
          exact
          to={`/facilities/${facilityId}`}
          className={`${className}__tab`}
          activeClassName={`${className}__active_tab`}
        >
          トップ
        </NavLink>
        <NavLink
          to={`/facilities/${facilityId}/events`}
          className={`${className}__tab`}
          activeClassName={`${className}__active_tab`}
        >
          イベント
        </NavLink>
        <NavLink
          to={`/facilities/${facilityId}/reviews`}
          className={`${className}__tab`}
          activeClassName={`${className}__active_tab`}
        >
          口コミ
        </NavLink>
        <NavLink
          to={`/facilities/${facilityId}/access`}
          className={`${className}__tab`}
          activeClassName={`${className}__active_tab`}
        >
          アクセス
        </NavLink>
      </div>
      {/* tabルート */}
      <Switch>
        <Route exact path='/facilities/:id(\d+)' component={Reviews} />
        <Route path='/facilities/:id(\d+)/access' component={Access} />
        <Route path='/facilities/:id(\d+)/reviews' component={Reviews} />
      </Switch>
    </div>
  );
};

const StyledTabs = styled(Tabs)`
&__tabs {
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
}
&__tab {
  width: 25%;
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
}
&__active_tab {
  background: #888;
  &:hover {
    background: #888;
  }
}
`;

export default StyledTabs;