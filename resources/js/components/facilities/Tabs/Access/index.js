import React, { useEffect } from 'react';
import GoogleMap from '../../../shared/GoogleMap';
import { useGlobalState } from '../../../global/ContextProvider';

const Access = ({match}) => {
  const facilityId = match.params.id;
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  
  return (
    <div>
      <GoogleMap
        address={`${facility.m_prefecture.name}${facility.address}${facility.building || ''}`}
        markerName={facility.name}
      />
    </div>
  );
};

export default Access;