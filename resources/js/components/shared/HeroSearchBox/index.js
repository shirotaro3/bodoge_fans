import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Hero = ({ className, params = {} }) => {
  return (
    <div className={className}>
      <SearchBox defaultParams={params} />
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  params: PropTypes.object
};

const StyledHero = styled(Hero)`
  width: 100%;
  background: #777;
  padding: 60px 0;
  background-image: url('/img/boardgames.jpg');
  background-position: center;
  background-size: cover;
`;

export default StyledHero;