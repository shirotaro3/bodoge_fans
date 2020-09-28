import React from 'react';
import styled, { keyframes } from 'styled-components';

// 親要素にposition: relativeが必要
const Waiting = ({wait = false, text='通信中', className}) => {
  return (
    <>
      {wait && (
        <div className={className}>
          <div className={`${className}__icon`}></div>
          <span>{text}</span>
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

const StyledWaiting = styled(Waiting)`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #000;
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
    border: .35rem solid #aaa;
    border-top-color: #fff;
    animation: ${spin} 1s infinite linear;
    margin: 0 auto 10px auto;
  }
`;

export default StyledWaiting;