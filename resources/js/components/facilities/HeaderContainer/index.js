import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../components/global/ContextProvider';
import NameDescription from './NameDescription';
import TimeTable from './TimeTable';

const HeaderContainer = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilities = globalState.facilities.data[facilityId];
  return (
    <div className={className}>
      <NameDescription facilityId={facilityId} />
      <TimeTable facilityId={facilityId} />
    </div>
  );
};

const StyledHeaderContainer = styled(HeaderContainer).attrs(props => ({
  imgUrl: props.imgUrl ? `url(${props.imgUrl})` : '#555'
}))`
  width: 100%;
  min-height: 400px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .3)), ${props => props.imgUrl};
  background-size: cover;
  padding: 40px;
  display: flex;
`;

export default StyledHeaderContainer;