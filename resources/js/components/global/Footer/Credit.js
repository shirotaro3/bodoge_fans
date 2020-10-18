import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

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
  padding: 13px 0;
  text-align: center;
  color: #fff;
  background: #333;
  ${media.lessThan('medium')`
    height: 45px;
  `}
`

export default StyledCredit;