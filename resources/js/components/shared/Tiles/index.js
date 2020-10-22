import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import TileItem from './TileItem';

// collection: [{ label, path, (icon, bgImage) }]
const Tiles = ({className, tileValues}) => {
  return (

    <div className={className}>
      <div className={`${className}__inner`}>
        {
          tileValues.map((o, i) => {
            return (
              <TileItem
                label={o.label}
                icon={o.icon}
                path={o.path}
                bgImageUrl={o.bgImageUrl}
                key={i}
              />
            );
          })
        }
      </div>
    </div>
  );
};

Tiles.propTypes = {
  className: PropTypes.string,
  tileValues: PropTypes.object
};

const StyledTiles = styled(Tiles)`
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

export default StyledTiles;