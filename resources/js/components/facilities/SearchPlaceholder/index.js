import React from 'react';
import styled from 'styled-components';
import PlaceholderItem from './SearchPlaceholderItem';

const SearchPlaceholder = ({className}) => {
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

const StyledSearchPlaceholder = styled(SearchPlaceholder)`

`;

export default StyledSearchPlaceholder;