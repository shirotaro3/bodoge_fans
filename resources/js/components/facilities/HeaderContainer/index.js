import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../components/global/ContextProvider';

const HeaderContainer = ({className, id}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilities = globalState.facilities.data[id];
  return (
    <div className={className}>
      <h2>{facilities.name}</h2>
      <p>{facilities.description}</p>
    </div>
  );
};

const StyledHeaderContainer = styled(HeaderContainer).attrs(props => ({
  imgUrl: props.imgUrl ? `url(${props.imgUrl})` : '#555'
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