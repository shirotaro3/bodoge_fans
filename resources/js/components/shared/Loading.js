import React from 'react';
import styled, { keyframes } from 'styled-components';

// 親要素にposition: relativeが必要
const Loading = ({resolved = false, className}) => {
  return (
    <>
      {resolved || (
        <div className={className}>
          <div className={`${className}__icon`}></div>
        </div>
      )}
    </>
  )
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled(Loading)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 30px 50px;
  margin: 0%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  opacity: .7;
  font-weight: bold;
  &__icon {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: .35rem solid #888;
    border-top-color: #ddd;
    animation: ${spin} 1s infinite linear;
    margin: 0 auto 10px auto;
  }
`;

export default StyledLoading;