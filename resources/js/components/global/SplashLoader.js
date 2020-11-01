import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../shared/Loading';

const SplashLoader = ({className}) => {
  return (
    <div className={className}>
      <Loading resolved={false} size='60px' />
    </div>
  );
};

SplashLoader.propTypes = {
  className: PropTypes.string
};

const StyledSplashLoader = styled(SplashLoader)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 40;
  background: #444;
`;

export default StyledSplashLoader;