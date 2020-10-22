import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const FacilityListPlaceholderItem = ({className}) => {
  return (
    <div className={className}>
      <div className={`${className}__img`}></div>
      <div className={`${className}__column`}>
        <div className={`${className}__name`}></div>
        <div className={`${className}__description`}></div>
        <div className={`${className}__services`}></div>
      </div>
    </div>
  );
};

FacilityListPlaceholderItem.propTypes = {
  className: PropTypes.string
};

const StyledFacilityListPlaceholderItem = styled(FacilityListPlaceholderItem)`
  margin: 30px 10px;
  display: flex;
  background: #777;
  border-radius: 10px;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.3), 0 0px 0 1px rgba(0,0,0, 0.05);
  &__img {
    height: 180px;
    width: 30%;
    background: #bbb;
    border: 4px solid #777;
    ${media.lessThan('medium')`
      height: 130px;    
    `}
  }
  &__column {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 180px;
    ${media.lessThan('medium')`
      height: 130px;    
    `}
  }
  &__name {
    height: 45px;
    ${media.lessThan('medium')`
      height: 37px;
    `}
  }
  &__description {
    flex: 1;
    border-bottom: 1px solid #999;
  }
  &__services {
    height: 50px;
  }
`;

export default StyledFacilityListPlaceholderItem;