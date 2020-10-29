import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { BsFillImageFill } from 'react-icons/bs';
import { useGlobalState } from '../../../../components/global/ContextProvider';

const EditImage = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const authUserId = globalState.auth.user.id;
  const isMine = facility.user_id === authUserId;

  const postImage = async (imageData) => {
    try {
      // multipart/form-dataで送信する（
      // laravelがputのmultipart/form-dataのパラメータを受け取れないので、_methodを指定）
      const submitData = new FormData();
      submitData.append('header_image', imageData);
      submitData.append('_method', 'put');
      const response = await axios.post(`/api/facilities/${facilityId}`, submitData);
      dispatch({type: 'SET_FACILITIES', data: [response.data]});
      dispatch({type: 'MESSAGE', text: 'ヘッダー画像が変更されました。'});
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = () => {
    dispatch({
      type: 'MODAL_OPEN',
      modalType: 'IMAGE_UPLOAD',
      title: 'ヘッダー画像の変更',
      body: '画像をアップロードします。',
      callback: postImage
    });
  };
  // 画像変更ボタン
  if (isMine) {
    return (
      <div className={className}>
        <BsFillImageFill className={`${className}__icon`} onClick={handleClick} />
      </div>
    );
  }
  return <></>;
};

EditImage.propTypes = {
  className: PropTypes.string,
  facilityId: PropTypes.number,
};

const StyledEditImage = styled(EditImage)`
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
`;

export default StyledEditImage;