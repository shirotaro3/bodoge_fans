import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const Hero = ({className, icon, text}) => {
  const Icon = icon;
  return (
    <div className={className}>
      <div className={`${className}__innerbox`}>
        <div className={`${className}__heading`}>
          <Icon size='30px' />
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.func,
  text: PropTypes.string
};

const StyledHero = styled(Hero).attrs(props => {
  return ({
    bgImage: props.imageUrl ? `url(${props.imageUrl})` : 'none'
  });
})` 
  height: 300px;
  background-image: ${props => props.bgImage};
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