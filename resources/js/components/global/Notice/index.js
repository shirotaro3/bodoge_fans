import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { useGlobalState } from '../ContextProvider';
import Animation from './Animation';

const Notice = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const onEntered = () => {
    setTimeout(()=>{
      dispatch({type: 'HIDE_NOTICE'});
    }, 2600);
  }
  return (
    <div className={className}>
      <Transition in={globalState.notice.isShow} timeout={200} onEntered={onEntered}>
        {(state) => (
          <Animation state={state} color={globalState.notice.color}>
            {globalState.notice.text}
          </Animation>
        )}
      </Transition>
    </div>
  );
};

const StyledNotice = styled(Notice)`
  position: absolute;
  width: 100%;
  top: 0;
  text-align: center;
  z-index: 10;
`;

export default StyledNotice;