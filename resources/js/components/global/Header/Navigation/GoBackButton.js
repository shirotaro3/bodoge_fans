import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useGlobalState } from '../../../global/ContextProvider';

const GoBackButton = ({className}) => {
  const [, dispatch] = useGlobalState();
  const history = useHistory();
  const handleClick = () => {
    dispatch({type: 'CLOSE_ALL'});
    history.goBack();
  };
  return (
    <div className={className} onClick={handleClick} role='button'>
      <IoIosArrowBack className={`${className}__icon`} size='15px' />    
    </div>
  );
};

GoBackButton.propTypes = {
  className: PropTypes.string
};

const StyledGoBackButton = styled(GoBackButton)`
  width: 11%;
  display: none;
  ${media.lessThan('small')`
    text-align: center;
    display: block;
    padding-bottom: 6px;
    padding-top: 20px;
    border-top: 5px solid #999;
    border-bottom: 0;
    border-right: 1px solid #999;
    cursor: pointer;
  `}
  &__icon {
    color: #fff;
    margin: 0 auto;
    opacity: .5;
  }
`;

export default StyledGoBackButton;