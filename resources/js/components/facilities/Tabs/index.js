import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import Access from './Access';
import Reviews from './Reviews';

const Tabs = ({className, facilityId}) => {
  return (
    <div>
      <Link to={`/facilities/${facilityId}/access`}>Access</Link>
      <Link to={`/facilities/${facilityId}/reviews`}>Reviews</Link>
      <Switch>
        <Route exact path='/facilities/:id(\d+)' component={Access} />
        <Route path='/facilities/:id(\d+)/access' component={Access} />
        <Route path='/facilities/:id(\d+)/reviews' component={Reviews} />
      </Switch>
    </div>
  );
};

const StyledTabs = styled(Tabs)`
`;

export default StyledTabs;