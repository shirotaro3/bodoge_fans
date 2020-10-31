import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { IoIosRefresh } from 'react-icons/io';
import { useGlobalState } from '../../../global/ContextProvider';

const ReloadButton = ({className}) => {
  const [, dispatch] = useGlobalState();
  const history = useHistory();
  const handleClick = () => {
    dispatch({type: 'CLOSE_ALL'});
    history.go(0);
  };
  return (
    <div className={className} onClick={handleClick} role='button'>
      <IoIosRefresh className={`${className}__icon`} size='15px' />    
    </div>
  );
};

ReloadButton.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object
};

const StyledReloadButton = styled(ReloadButton)`
  width: 11%;
  display: none;
  ${media.lessThan('small')`
    text-align: center;
    display: block;
    padding-bottom: 6px;
    padding-top: 20px;
    border-top: 5px solid #999;
    border-bottom: 0;
    border-left: 1px solid #999;
    cursor: pointer;
  `}
  &__icon {
    color: #fff;
    margin: 0 auto;
    opacity: .5;
  }
`;

export default StyledReloadButton;