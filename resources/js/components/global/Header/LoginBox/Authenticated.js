import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PullDownMenu from './PullDownMenu';

const Authenticated = ({className}) => {
  return (
    <div className={className}>
      <PullDownMenu />
    </div>
  );
};

Authenticated.propTypes = {
  className: PropTypes.string
};

const StyledAuthenticated = styled(Authenticated)`
  
`;

export default StyledAuthenticated;