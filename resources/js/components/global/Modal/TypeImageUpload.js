import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useForm } from 'react-hook-form';
import { useGlobalState } from '../ContextProvider';
import { FormVertical as Form, InputFile } from '../../shared/FormParts';
const TypeUpload = ({className, callback}) => {
  const [ , dispatch] = useGlobalState();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    dispatch({type: 'CLOSE_ALL'});
    await callback(data.image[0]);
  });
  const cancel = () => {
    dispatch({type: 'CLOSE_ALL'});
  };
  return (
    <div className={className}>
      <Form onSubmit={onSubmit}>
        <div className={`${className}__box`}>
          <InputFile
            name='image'
            placeholder='画像を選択（最大3MB）'
            ref={register({
              validate: {
                filesize: files => files[0].size < 3000000 || !files[0],
                filetype: files => files[0].type === 'image/jpeg' ||
                files[0].type === 'image/gif' ||
                files[0].type === 'image/png' ||
                !files[0]
              }
            })}
          />
          {errors.image && <span>3MB以下の「画像ファイル」のみ利用できます。</span>}
        </div>
        <div className={`${className}__button_group`}>
          <button
            type='submit'
            className={`${className}__button`}
          >
            アップロード
          </button>
          <button
            type='button'
            className={`${className}__button`}
            onClick={cancel}
          >
            キャンセル
          </button>
        </div>
      </Form>
    </div>
  );
};

TypeUpload.propTypes = {
  className: PropTypes.string,
  callback: PropTypes.func
};

const StyledTypeUpload = styled(TypeUpload)`
  &__button_group {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    button {
      margin: 0 10px 0 10px;
    };
  }
  &__box {
    border: 2px dashed #aaa;
    padding: 20px 25px 0px 25px;
    margin: 0 40px;
    ${media.lessThan('small')`
      margin: 0 10px;
    `}
  }
  &__button {
    outline: none;
    width: 100px;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    background: #ccc;
    cursor: pointer;
    &:hover {
      background: #aaa;
    }
  }
`;

export default StyledTypeUpload;