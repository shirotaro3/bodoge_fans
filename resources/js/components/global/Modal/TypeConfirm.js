import React from 'react';
import { useGlobalState } from '../ContextProvider';
import styled from 'styled-components';

const TypeConfirm = ({className, callback}) => {
  const [globalState, dispatch] = useGlobalState();
  const ok = async () => {
    dispatch({type: 'CLOSE_ALL'});
    await callback();
  };
  const cancel = () => {
    dispatch({type: 'CLOSE_ALL'});
  };
  return (
    <div className={className}>
      <div className={`${className}__button_group`}>
        <button
          type='button'
          className={`${className}__button`}
          onClick={ok}
        >
          はい
        </button>
        <button
          type='button'
          className={`${className}__button`}
          onClick={cancel}
        >
          いいえ
        </button>
      </div>
    </div>
  );
};

const StyledTypeConfirm = styled(TypeConfirm)`
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

export default StyledTypeConfirm;