import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const FacilityListPlaceholderItem = ({className}) => {
  return (
    <div className={className}>
      <div className={`${className}__flex`}>
        <div className={`${className}__img`}>
          <span className={`${className}__facility_type`}></span>
        </div>
        <div className={`${className}__column`}>
          <div className={`${className}__name`}></div>
          <div className={`${className}__description`}></div>
          <div className={`${className}__hidden_tablet`}>
          </div>
        </div>
      </div>
      <div className={`${className}__show_less_than_tablet`}>
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
  flex-direction: column;
  background: #777;
  color: #ddd;
  border-radius: 10px;
  align-items: center;
  overflow: hidden;
  transition: .1s;
  box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.3), 0 0px 0 1px rgba(0,0,0, 0.05);
  &:hover {
    transform: translateY(-3px);
  }
  &__flex {
    display: flex;
    width: 100%;
  }
  &__img {
    height: 200px;
    width: 30%;
    background: #aaa;
    border: 4px solid #777;
    position: relative;
    ${media.lessThan('medium')`
      height: 130px;    
    `}
  }
  &__facility_type {
    background: #777;
    color: #ddd;
    padding: 4px 8px;
    position: absolute;
    border-radius: 4px;
    font-size: 12px;
    height: 20px;
    width: 50px;
    top: 3px;
    left: 3px;
    opacity: .9;
    ${media.lessThan('medium')`
      font-size: 10px;    
    `}
  }
  &__column {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
    ${media.lessThan('medium')`
      height: 130px;    
    `}
  }
  &__name {
    font-size: 20px;
    padding: 14px 20px;
    height: 45px;
    font-weight: bold;
    ${media.lessThan('medium')`
      padding: 10px 15px;
      font-size: 17px;
      height: 37px;
    `}
  }
  &__description {
    padding: 10px 20px;
    height: 70px;
    border-bottom: 1px solid #999;
    ${media.lessThan('medium')`
      padding: 10px 15px;
      font-size: 14px;
      flex: 1;
    `}
  }
  &__hidden_tablet {
    ${media.lessThan('medium')`
      display: none;
    `}
  }
  &__show_less_than_tablet {
    display: none;
    ${media.lessThan('medium')`
      display: block;
      width: 100%;
      height: 76px;
    `}
    ${media.lessThan('small')`
      display: block;
      width: 100%;
      height: 47px;
    `}
  }
`;

export default StyledFacilityListPlaceholderItem;