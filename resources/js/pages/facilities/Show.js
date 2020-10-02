import React from 'react';

const FacilitiesShow = ({match}) => {
  return (
    <div>
      FacilityID:{match.params.id}
    </div>
  );
};

export default FacilitiesShow;