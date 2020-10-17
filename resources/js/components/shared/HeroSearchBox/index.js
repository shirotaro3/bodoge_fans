import React from 'react';
import styled from 'styled-components';
import { mixinIsShownTablet } from '../../shared/StyledCss';
import SearchBox from './SearchBox';

const Hero = ({ className, params = {} }) => {
  return (
    <div className={className}>
      <SearchBox defaultParams={params} />
    </div>
  );
}

const StyledHero = styled(Hero)`
  ${mixinIsShownTablet}
  width: 100%;
  background: #777;
  padding: 60px 200px;
  background-image: url('/img/boardgames.jpg');
  background-position: center;
  background-size: cover;
`

export default StyledHero;