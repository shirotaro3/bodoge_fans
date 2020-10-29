import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlaceholderItem from './FacilityListPlaceholderItem';

const FacilityListPlaceholder = ({className}) => {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<PlaceholderItem key={i} />);
  }
  return (
    <div className={className}>
      {
        items
      }
    </div>
  );
};

FacilityListPlaceholder.propTypes = {
  className: PropTypes.string
};

const StyledFacilityListPlaceholder = styled(FacilityListPlaceholder)`
  padding-top: 26px;
  max-width: 1000px;
  margin: 0 auto;
`;

export default StyledFacilityListPlaceholder;