import React from 'react';
import PropTypes from 'prop-types';
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
};

Footer.propTypes = {
  className: PropTypes.string
};

const StyledFooter = styled(Footer)`
  width: 100%;
  margin-top: auto;
  ${media.lessThan('medium')`
    font-size: 12px;
  `}
  ${media.lessThan('small')`
    margin-bottom: 59px;
  `}
`;

export default StyledFooter;