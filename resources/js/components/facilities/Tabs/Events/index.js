import React from 'react';
import styled from 'styled-components';

const Events = ({className}) => {
  return (
    <div className={`${className} page`}>
      開発中
    </div>
  );
};

const StyledEvents = styled(Events)`
`;

export default StyledEvents;