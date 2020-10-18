import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Hero = ({ className, params = {} }) => {
  return (
    <div className={className}>
      <SearchBox defaultParams={params} />
    </div>
  );
}

const StyledHero = styled(Hero)`
  width: 100%;
  background: #777;
  padding: 60px 0;
  background-image: url('/img/boardgames.jpg');
  background-position: center;
  background-size: cover;
`

export default StyledHero;