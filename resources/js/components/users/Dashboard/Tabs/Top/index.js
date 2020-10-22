import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tiles from '../../../../shared/Tiles';
import { BiSearchAlt } from 'react-icons/bi';
import { BsCalendar, BsStar, BsChatDots } from 'react-icons/bs';

const Top = ({className}) => {
  const tileValues = [
    {
      label: '探す',
      icon: BiSearchAlt,
      path: '/'
    },
    {
      label: 'お気に入り',
      icon: BsStar,
      path: '/users/likes'
    },
    {
      label: 'イベント',
      icon: BsCalendar,
      path: '/events'
    },
    {
      label: 'クチコミ',
      icon: BsChatDots,
      path: '/reviews'
    }
  ];
  return (
    <div className={`${className} fadein`}>
      <Tiles tileValues={tileValues} />
    </div>
  );
};

Top.propTypes = {
  className: PropTypes.string
};

const StyledTop = styled(Top)`
`;

export default StyledTop;