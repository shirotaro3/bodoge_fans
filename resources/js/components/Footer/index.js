import React from 'react';
import styled from 'styled-components';
import mixinDivLink from '../shared/StyledCss';
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
`;

export default StyledFooter;