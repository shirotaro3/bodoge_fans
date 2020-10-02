import React from 'react';
import styled from 'styled-components';

const SliderChild = ({className, children}) => {
  return (
    <div className={className}>
      <span className={`${className}__child`}>
        {children}
      </span>
    </div>
  );
};

const StyledSliderChild = styled(SliderChild)`
  height: 250px;
  border: 3px solid rgba(0,0,0,0);
  position: relative;
  transition: .3s;
  outline: none;
  cursor: pointer;
  &:hover {
    border-color: rgba(0,0,0,.3);    
  }
  &__child {
    position: absolute;
    top: 180px;
    width: 100%;
    height: 64px;
    text-align: center;
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 10px 30px;
  }
`;

export default StyledSliderChild;