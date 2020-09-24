import React from 'react';
import styled from 'styled-components';

const Credit = ({className}) => {
  return (
    <div className={className}>
      Copyright © BodogeFans All Rights Reserved. 
    </div>
  );
}

const StyledCredit = styled(Credit)`
  width: 100%;
  height: 50px;
  padding: 13px 10px;
  text-align: center;
  color: #fff;
  background: #333;
`

export default StyledCredit;