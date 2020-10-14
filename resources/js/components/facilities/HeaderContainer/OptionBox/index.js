import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../../components/global/ContextProvider';
import SettingMenu from './SettingMenu';
import Like from './Like';

const OptionBox = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  if (globalState.auth.isLoggedIn) {
    return (
      <div className={className}>
        <Like facilityId={facilityId} />
        <SettingMenu facilityId={facilityId} />
      </div>
    )
  }
  return <></>
};

const StyledOptionBox = styled(OptionBox)`
  position: absolute;
  display: flex;
  padding: 10px;
  margin: 10px;
  top: 0;
  right: 0;
  color: #fff;
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
  &__iconLiked {
    cursor: pointer;
    color: #ff9;
    font-size: 1.5em;
    margin: 0 6px;
  }
`;

export default StyledOptionBox;