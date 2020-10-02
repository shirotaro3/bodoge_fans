import React from 'react';
import styled from 'styled-components';

const HeaderContainer = ({className, name, description}) => {
  return (
    <div className={className}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

const StyledHeaderContainer = styled(HeaderContainer).attrs(props => ({
  imgUrl: props.imgUrl ? `url(${props.imgUrl})` : 'none'
}))`
  width: 100%;
  height: 400px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .3)), ${props => props.imgUrl};
  background-size: cover;
  padding: 40px;
  color: #fff;
  border-bottom: 20px solid #555;
  h2 {
    margin: 0;
    font-size: 36px;
  }
  p {
    font-size: 18px;
  }
`;

export default StyledHeaderContainer;