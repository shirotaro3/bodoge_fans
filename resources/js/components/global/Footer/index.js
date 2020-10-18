import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import NavTop from './NavTop';
import Credit from './Credit';

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <NavTop />
      <Credit />
    </footer>
  );
}

const StyledFooter = styled(Footer)`
  width: 100%;
  margin-top: auto;
  ${media.lessThan('medium')`
    font-size: 12px;
  `}
`;

export default StyledFooter;