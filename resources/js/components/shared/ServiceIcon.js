import React from 'react';
import styled from 'styled-components';

const ServiceIcon = ({className, text}) => {
  return (
    <div className={className}>
      <div className={`${className}__child`}>
      </div>
      <span>{text}</span>
    </div>
  );
};

const StyledServiceIcon = styled(ServiceIcon).attrs(props => ({
  bgColor: props.isLit ? '#bbb' : '#777',
  iconUrl: props.iconUrl ? `url(${props.iconUrl})` :'none'
}))`
  width: 80px;
  position: relative;
  margin: 0 2px;
  &__child {
    background-color: ${props=>props.bgColor};
    background-image: ${props=>props.iconUrl};
    background-size: cover;
    height: 36px;
    width: 36px;
    margin: 0 auto;
    border-radius: 18px;
    border: 4px solid ${props=>props.bgColor};
  }
  span {
      position: absolute;
      top: 42px;
      display: inline-block;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 8px;
    }
`;

export default StyledServiceIcon;