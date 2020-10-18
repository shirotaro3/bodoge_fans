import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const ServiceIcon = ({className, text}) => {
  return (
    <div className={className}>
      <div className={`${className}__icon`}>
      </div>
      <span>{text}</span>
    </div>
  );
};

const StyledServiceIcon = styled(ServiceIcon).attrs(props => ({
  bgColor: props.isLit ? '#ccc' : '#777',
  textColor: props.isLit ? '#fff' : '#999',
  iconUrl: props.iconUrl ? `url(${props.iconUrl})` :'none'
}))`
  width: 8%;
  max-width: 90px;
  position: relative;
  margin: 0 2px;
  padding-bottom: 18px;
  ${media.lessThan('medium')`
    padding-bottom: 20px;
  `}
  ${media.lessThan('small')`
    margin: 0;
    padding: 0;
    width: calc(9% - 2px);
  `}
  &__icon {
    background-color: ${props=>props.bgColor};
    background-image: ${props=>props.iconUrl};
    background-size: cover;
    height: 36px;
    width: 36px;
    margin: 0 auto;
    border-radius: 18px;
    border: 4px solid ${props=>props.bgColor};
    ${media.lessThan('medium')`
      width: 30px;
      height: 30px;
      border: 2px solid ${props=>props.bgColor};
    `}
    ${media.lessThan('small')`
      width: 24px;
      height: 24px;
      border: 1px solid ${props=>props.bgColor};
    `}
  }
  span {
    position: absolute;
    top: 42px;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: ${props=>props.textColor};
    font-size: 8px;
    ${media.lessThan('medium')`
    font-size: 4px;
    top: 34px;
    `}
    ${media.lessThan('small')`
    display: none;
    `}
  }
`;

export default StyledServiceIcon;