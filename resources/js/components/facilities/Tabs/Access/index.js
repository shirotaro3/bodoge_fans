import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from '../../../shared/GoogleMap';
import { useGlobalState } from '../../../global/ContextProvider';

const Access = ({match}) => {
  const facilityId = match.params.id;
  const [globalState, ] = useGlobalState();
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

Access.propTypes = {
  match: PropTypes.object
};

export default Access;