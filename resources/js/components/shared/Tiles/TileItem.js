import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { divLink } from '../mixinCss';
import { Link } from 'react-router-dom';

// collection: [{ label, icon, path }]
const TileItem = ({className, label, icon, path}) => {
  const Icon = icon;
  return (
    <div className={className} role='button'>
      <div className={`${className}__liner`} />
      {
        icon &&
          <Icon className={`${className}__icon`} />
      }
      <div className={`${className}__label`}>
        {label}
      </div>
      {
        path &&
          <Link className={`${className}__link`} to={path} />
      }
    </div>
  );
};

const StyledTileItem = styled(TileItem).attrs(props => {
  return {
    bgImage: props.bgImageUrl ? `url(${props.bgImageUrl})` : 'none'
  }
})`
  ${divLink}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: calc(50% - 4px);
  background: #555;
  color: #fff;
  margin: 2px;
  transition: .3s;
  border-radius: 10px;
  border: 2px solid #aaa;
  background: linear-gradient( to right, rgba(0,0,0,.3),  rgba(0,0,0,.3) ), ${props => props.bgImage};
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: .6;
  }
  ${media.lessThan('small')`
    height: 90px;
    `}
  &__liner {
    height: 100%;
    width: 1px;
  }
  &__icon {
    font-size: 40px;
    ${media.lessThan('small')`
      font-size: 30px;
    `}
  }
  &__label {
    font-size: 17px;
    margin-left: 10px;
    font-weight: bold;
    ${media.lessThan('small')`
      font-size: 14px;
    `}
  }
`;

export default StyledTileItem;