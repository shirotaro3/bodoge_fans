import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../components/global/ContextProvider';

const NameDescription = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilities = globalState.facilities.data[facilityId];
  return (
    <div className={className}>
      <h2 className={`${className}__h2`}>{facilities.name}</h2>
      <p className={`${className}__p`}>{facilities.description}</p>
    </div>
  );
};

const StyledND = styled(NameDescription)`
  color: #fff;
  width: 60%;
  &__h2 {
    margin: 0;
    font-size: 36px;
  }
  &__p {
    font-size: 18px;
  }
`;

export default StyledND;