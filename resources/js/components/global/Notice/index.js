import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Transition } from 'react-transition-group';
import { useGlobalState } from '../ContextProvider';
import Animation from './Animation';

const Notice = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const onEntered = () => {
    setTimeout(()=>{
      dispatch({type: 'HIDE_NOTICE'});
    }, 2600);
  };
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

Notice.propTypes = {
  className: PropTypes.string
};

const StyledNotice = styled(Notice)`
  position: absolute;
  width: 100%;
  top: 0;
  text-align: center;
  z-index: 10;
  font-size: 13px;
  font-weight: bold;
  ${media.lessThan('medium')`
    top: 45px;
    font-size: 11px;
  `}
  ${media.lessThan('medium')`
    top: 40px;
    font-size: 11px;
  `}
`;

export default StyledNotice;