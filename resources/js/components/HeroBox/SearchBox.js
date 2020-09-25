import React from 'react';
import styled from 'styled-components';

const SearchBox = ({className}) => {
  return (
    <div className={className}>
      お店を探す
    </div>
  );
}

const StyledSearchBox = styled(SearchBox)`
  background: rgba(0,0,0,.4);
  color: #eee;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

export default StyledSearchBox;