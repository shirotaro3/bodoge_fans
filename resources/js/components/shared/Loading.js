import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spin } from './keyframes';

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
  );
};

Loading.propTypes = {
  resolved: PropTypes.bool,
  className: PropTypes.string
};

const StyledLoading = styled(Loading).attrs(props => ({
  size: props.size || '40px'
}))`
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
    width: ${props => props.size};
    height: ${props => props.size};
    border: .46rem solid #888;
    border-top-color: #ddd;
    animation: ${spin} 1s infinite linear;
    margin: 0 auto 10px auto;
  }
`;

export default StyledLoading;