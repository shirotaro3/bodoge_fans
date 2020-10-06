import React from 'react';
import styled from 'styled-components';

const ReviewBox = ({className, title, body}) => {
  return (
    <div className={className}>
      <span>{title}</span>
      <span>{body}</span>
    </div>
  );
};

const StyledReviewBox = styled(ReviewBox)`
  &__title {
  }
  &__body {
  }
`;

export default StyledReviewBox;