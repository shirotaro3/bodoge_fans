import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const Events = ({className}) => {
  return (
    <div className={`${className} page`}>
      <h2>イベント（開発中）</h2>
    </div>
  );
};

const StyledEvents = styled(Events)`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 30px;
  ${media.lessThan('large')`
    max-width: 800px;
  `}
`;

Events.propTypes = {
  className: PropTypes.string
};

export default StyledEvents;