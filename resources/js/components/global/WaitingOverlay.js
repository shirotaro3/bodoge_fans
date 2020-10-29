import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../shared/Loading';
import { useGlobalState } from '../global/ContextProvider';

const WaitingOverlay = ({className}) => {
  const [globalState, ] = useGlobalState();
  const isShow = globalState.visibility.waiting > 0;
  if (isShow) {
    return (
      <div className={className}>
        <Loading resolved={false} size='60px' />
      </div>
    );
  }
  return <></>;
};

WaitingOverlay.propTypes = {
  className: PropTypes.string
};

const StyledWaitingOverlay = styled(WaitingOverlay)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 40;
  background: rgba(0,0,0,.3);
`;

export default StyledWaitingOverlay;