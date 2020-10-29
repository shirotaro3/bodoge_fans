import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import TilesPlaceholderItem from './TilesPlaceholderItem';

const TilesPlaceholder = ({className}) => {
  const items = [];
  for(let i = 0; i <= 3; i++) {
    items.push(
      <TilesPlaceholderItem key={i} />
    );
  }
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        {items}
      </div>
    </div>
  );
};

TilesPlaceholder.propTypes = {
  className: PropTypes.string
};

const StyledTilesPlaceholder = styled(TilesPlaceholder)`
  background: #888;
  padding: 5px 0 40px 0;
  border-bottom: 20px solid #aaa;
  min-height: 376px;
  ${media.lessThan('small')`
    min-height: 256px;
  `}
  &__inner {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    flex-wrap: wrap;
  }
`;

export default StyledTilesPlaceholder;