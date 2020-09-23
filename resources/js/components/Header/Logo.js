import React from 'react';
import styled from 'styled-components';

const Logo = ({ className, logoText, subText }) => {
  return (
    <div className={className}>
      <h1 className={`${className}__mainText`}>
        {logoText}
      </h1>
      <p className={`${className}__subText`}>
        {subText}
      </p>
    </div>
  )
}

const StyledLogo = styled(Logo)`
  width: 270px;
  padding: 3px 0;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
  &__mainText {
    font-size: 25px;
    margin: 0;
  }
  &__subText {
    font-size: 10px;
    margin: 0;
  }
`

export default StyledLogo;