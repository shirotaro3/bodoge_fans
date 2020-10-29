import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TilesPlaceholderItem = ({className}) => {
  return (
    <div className={`${className} fadein`}>
    </div>
  );
};

TilesPlaceholderItem.propTypes = {
  className: PropTypes.string
};

const StyledTilesPlaceholderItem = styled(TilesPlaceholderItem)`
  height: 150px;
  width: calc(50% - 4px);
  margin: 2px;
  border-radius: 10px;
  border: 2px solid #aaa;
  background: #666;
`;

export default StyledTilesPlaceholderItem;