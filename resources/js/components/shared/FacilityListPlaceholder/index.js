import React from 'react';
import styled from 'styled-components';
import PlaceholderItem from './FacilityListPlaceholderItem';

const FacilityListPlaceholder = ({className}) => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<PlaceholderItem key={i} />);
  };
  return (
    <div className={className}>
      {
        items
      }
    </div>
  );
};

const StyledFacilityListPlaceholder = styled(FacilityListPlaceholder)`
  padding-top: 26px;
`;

export default StyledFacilityListPlaceholder;