import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserIcon from './UserIcon';
import UserMenu from './UserMenu';
import { useGlobalState } from '../../../../global/ContextProvider';
import { fade } from '../../../../shared/keyframes';

const PullDownMenu = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const isOpen = globalState.visibility.userMenu;
  const handleClick = () => {
    if (isOpen) {
      return dispatch({type: 'CLOSE_ALL'});
    }
    return dispatch({type: 'USER_MENU_OPEN'});
  };
  return (
    <div className={className}>
      <div className={`${className}__button`} onClick={handleClick}  role='button'>
        <UserIcon />
      </div>
      {
        isOpen &&
        <div className={`${className}__menu`} onClick={handleClick}>
          <UserMenu />
        </div>
      }
    </div>
  );
};

PullDownMenu.propTypes = {
  className: PropTypes.string
};

const StyledPDM = styled(PullDownMenu)`
  position: relative;
  &__button {
    cursor: pointer;
  }
  &__menu {
    position: absolute;
    animation: ${fade} .3s 1;
    top: 40px;
    right: 0px;
    z-index: 30;
  }
`;

export default StyledPDM;