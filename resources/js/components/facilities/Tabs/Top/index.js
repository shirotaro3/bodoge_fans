import React from 'react';
import styled from 'styled-components';

const Top = ({className}) => {
  return (
    <div className={`${className} page`}>
      TOP
    </div>
  );
};

const StyledTop = styled(Top)`
`;

export default StyledTop;