import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const onClickScroll = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
};
const NavTop = ({className}) => {
  return (
    <div className={className} role='button' onClick={onClickScroll}>
      ページ上部へ戻る
    </div>
  );
};

NavTop.propTypes = {
  className: PropTypes.string
};

const StyledNavTop = styled(NavTop)`
  height: 47px;
  background: #444;
  color: #fff;
  text-align: center;
  padding: 13px 10px;
  cursor: pointer;
  &:hover {
    background: #555;
  }
  ${media.lessThan('medium')`
    height: 40px;
  `}
  ${media.lessThan('small')`
    display: none;
  `}
`;

export default StyledNavTop;