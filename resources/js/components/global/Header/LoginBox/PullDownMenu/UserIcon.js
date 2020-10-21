import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../shared/UserIcon';
import { useGlobalState } from '../../../../global/ContextProvider';
import { BsFillCaretDownFill, BsX } from 'react-icons/bs';

const UserIcon = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const user = globalState.auth.user;
  const isOpen = globalState.visibility.userMenu;
  return (
    <div className={className}>
      <Icon iconUrl={user.icon_url} size='30px' />
      <div className={`${className}__name`}>{user.name}</div>
      {
        isOpen ?
        <BsX size='10px' className={`${className}__icon`} /> :
        <BsFillCaretDownFill size='10px' className={`${className}__icon`} />
      }
    </div>
  );
};

const StyledUserIcon = styled(UserIcon)`
  display: flex;
  align-items: center;
  border: 1px solid #999;
  transition: .3s;
  border-radius: 20px;
  &:hover {
    color: #ddd;
    border-color: #777;
  }
  &__name {
    margin: 0 10px;
  }
  &__icon {
    margin-right: 4px;
  }
`;

export default StyledUserIcon;