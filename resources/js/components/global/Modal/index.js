import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useGlobalState } from '../ContextProvider';
import { fade } from '../../shared/keyframes';
import TypeConfirm from './TypeConfirm';
import TypeImageUpload from './TypeImageUpload';

const Modal = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const isShow = globalState.visibility.modal;
  const { type, title, body, callback } = globalState.modalConfig;
  const modalType = () => {
    switch(type) {
      case 'CONFIRM': {
        return <TypeConfirm callback={callback} />;
      };
      case 'IMAGE_UPLOAD': {
        return <TypeImageUpload callback={callback} />;
      };
    };
  };
  if (isShow) {
    return (
      <div className={className}>
        <div className={`${className}__title`}>{title}</div>
        <div className={`${className}__body`}>{body}</div>
        {
          modalType()
        }
      </div>
    );
  };
  return <></>;
};

const StyledModal = styled(Modal)`
  animation: ${fade} .3s 1;
  width: 100%;
  max-width: 500px;
  padding-bottom: 30px;
  border-radius: 10px;
  position: fixed;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index:30;
    box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.3), 0 0px 0 1px rgba(0,0,0, 0.05);
  overflow: hidden;
  ${media.lessThan('small')`
    max-width: 94%;
    padding-bottom: 20px;
  `}
  &__title {
    background: #777;
    color: #fff;
    font-weight: bold;
    padding: 8px 50px;
    font-size: 18px;
    ${media.lessThan('small')`
      font-size: 15px;
    `}
  }
  &__body {
    margin-top: 30px;
    padding: 0 40px;
    white-space: pre-wrap;
    ${media.lessThan('small')`
      font-size: 13px;
    `}
  }
`;

export default StyledModal;