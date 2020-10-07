import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../../global/ContextProvider';
import { BsGear } from 'react-icons/bs';
import Menu from './Menu';
import { fade } from '../../../../shared/keyframes';

const SettingMenu = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const isOpen = globalState.visibility.facilityMenu;
  const handleClick = () => {
    if (isOpen) {
      return dispatch({type: 'CLOSE_ALL'});
    }
    return dispatch({type: 'FACILITY_MENU_OPEN'});
  };
  return (
    <div className={className}>
      {/* ボタン */}
      <div className={`${className}__button`} onClick={handleClick}  role='button'>
        <BsGear className={`${className}__icon`} />
      </div>
      {
        // プルダウンメニュー
        isOpen &&
        <div className={`${className}__menu`}>
          <Menu facilityId={facilityId} />
        </div>
      }
    </div>
  );
};

const StyledSettingMenu = styled(SettingMenu)`
  position: relative;
  &__button {
    cursor: pointer;
  }
  &__menu {
    position: absolute;
    animation: ${fade} .3s 1;
    top: 35px;
    right: 0px;
    z-index: 30;
  }
  &__icon {
    cursor: pointer;
    color: #fff;
    font-size: 1.5em;
    margin: 0 6px;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
  }
`;

export default StyledSettingMenu;