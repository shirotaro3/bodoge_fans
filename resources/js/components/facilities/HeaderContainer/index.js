import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useGlobalState } from '../../../components/global/ContextProvider';
import NameDescription from './NameDescription';
import TimeTable from './TimeTable';
import OptionBox from './OptionBox';

const HeaderContainer = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilities = globalState.facilities.data[facilityId];
  return (
    <div className={className}>
      <div className={`${className}__container`}>
        <NameDescription facilityId={facilityId} />
        <TimeTable facilityId={facilityId} />
        <OptionBox facilityId={facilityId} />
      </div>
    </div>
  );
};

const StyledHeaderContainer = styled(HeaderContainer).attrs(props => ({
  imgUrl: props.imgUrl ? `url(${props.imgUrl})` : 'url(/img/boardgames.jpg)'
}))`
  width: 100%;
  min-height: 400px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), ${props => props.imgUrl};
  background-size: cover;
  background-position: center;
  &__container {
    padding: 40px 0;
    margin: 0 auto;
    display: flex;
    position: relative;
    min-height: 400px;
    max-width: 1000px;
    ${media.lessThan('large')`
      padding: 40px 30px;
    `}
    ${media.lessThan('medium')`
      flex-wrap: wrap;
      padding: 40px 20px;
    `}
  }
`;

export default StyledHeaderContainer;