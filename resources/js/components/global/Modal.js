import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../global/ContextProvider';
import { fade } from '../shared/keyframes';

const Modal = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const isShow = globalState.visibility.modal;
  const { type, title, body, callback } = globalState.modalConfig;
  const ok = async () => {
    dispatch({type: 'CLOSE_ALL'});
    await callback();
  };
  const cancel = () => {
    dispatch({type: 'CLOSE_ALL'});
  };
  if (isShow) {
    return (
      <div className={className}>
        <div className={`${className}__title`}>{title}</div>
        <div className={`${className}__body`}>{body}</div>
        <div className={`${className}__button_group`}>
          <button
            role='button'
            className={`${className}__button`}
            onClick={ok}
          >
            はい
          </button>
          <button
            role='button'
            className={`${className}__button`}
            onClick={cancel}
          >
            いいえ
          </button>
        </div>
      </div>
    );
  }
  return <></>
};

const StyledModal = styled(Modal)`
  animation: ${fade} .3s 1;
  width: 100%;
  max-width: 500px;
  padding-bottom: 30px;
  border-radius: 4px;
  position: fixed;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index:30;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,.3);
  overflow: hidden;
  &__title {
    background: #777;
    color: #fff;
    font-weight: bold;
    padding: 8px 50px;
    font-size: 18px;
  }
  &__body {
    margin-top: 30px;
    padding: 0 40px;
    white-space: pre-wrap;
  }
  &__button_group {
    display: flex;
    justify-content: center;
    padding: 0 50px;
    margin-top: 30px;
  }
  &__button {
    outline: none;
    display: block;
    width: 100px;
    padding: 10px 0;
    margin: 0 10px;
    border-radius: 4px;
    text-align: center;
    background: #ccc;
    cursor: pointer;
    &:hover {
      background: #aaa;
    }
  }
`;

export default StyledModal;