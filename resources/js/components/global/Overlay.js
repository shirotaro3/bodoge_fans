import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from './ContextProvider';

const Overlay = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const { userMenu, facilityMenu, modal } = globalState.visibility;
  const isShow = userMenu || facilityMenu || modal;
  const handleClick = () => {
    dispatch({type: 'CLOSE_ALL'});
  };
  if (isShow) {
    return <div className={className} onClick={handleClick} />;
  }
  return <></>;
};

const StyledOverlay = styled(Overlay)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
`;

export default StyledOverlay;