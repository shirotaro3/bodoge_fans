import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../global/ContextProvider';

const Top = ({className, match}) => {
  const facilityId = match.params.id;
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  return (
    <div className={`${className} page`}>
      {facility.introduction}
    </div>
  );
};

const StyledTop = styled(Top)`
`;

export default StyledTop;