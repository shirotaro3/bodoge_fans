import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Icon from '../UserIcon';

const ReviewListPlaceholder = () => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<ReviewListItem key={i} />);
  };
  return (
    <div>
      {
        items
      }
    </div>
  );
};

const ReviewListItemBase = ({className}) => {
  return (
    <div className={className}>
      <div className={`${className}__user`}>
        <Icon size='30px' />
      </div>
      <div className={`${className}__container`}>
      </div>
    </div>
  );
};

const ReviewListItem = styled(ReviewListItemBase)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  text-align: left;
  color: #333;
  max-width: 1000px;
  margin: 0 auto;
  &__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    width: 40px;
  }
  &__container {
    position: relative;
    flex: 1;
    flex-direction: column;
    background: #eee;
    margin-left: 20px;
    border-radius: 15px;
    height: 200px;
    box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.1), 0 0px 0 1px rgba(0,0,0, 0.05);
    ${media.lessThan('medium')`
      height: 100px;
    `}
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 30%; 
      left: -24px;
      border: 12px solid transparent;
      border-right: 12px solid #fff;
    }
  }
`;

export default ReviewListPlaceholder;