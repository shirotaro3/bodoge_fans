import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { BsChatDots } from 'react-icons/bs';

const Hero = ({className}) => {
  return (
    <div className={className}>
      <div className={`${className}__innerbox`}>
        <div className={`${className}__heading`}>
          <BsChatDots size='30px' />
          <h1>みんなのクチコミ</h1>
        </div>
      </div>
    </div>
  );
};

const StyledHero = styled(Hero)` 
  height: 300px;
  background-image: url(/img/dice.jpg);
  background-size: cover;
  background-position: center;
  border-bottom: 5px solid #555;
  ${media.lessThan('small')`
    height: 200px;
  `}
  &__innerbox {
    background: rgba(0,0,0,.4);
    color: #eee;
    padding: 20px;
    height: 100%;
    width: 100%;
  }
  &__heading {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    ${media.lessThan('medium')`
      font-size: 30px;
    `}
    ${media.lessThan('small')`
      font-size: 20px;
    `}
  }
`;

export default StyledHero;