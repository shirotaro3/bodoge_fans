import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Switch, Route, NavLink } from 'react-router-dom';
import Access from './Access';
import Reviews from './Reviews';
import Events from './Events';
import Top from './Top';
import { useGlobalState } from '../../global/ContextProvider';

const Tabs = ({className, facilityId}) => {
  const [globalState, ] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
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
          クチコミ({facility.reviews.length})
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
        <Route exact path='/facilities/:id(\d+)' component={Top} />
        <Route path='/facilities/:id(\d+)/access' component={Access} />
        <Route path='/facilities/:id(\d+)/reviews' component={Reviews} />
        <Route path='/facilities/:id(\d+)/events' component={Events} />
      </Switch>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  facilityId: PropTypes.string
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