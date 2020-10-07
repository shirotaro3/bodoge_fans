import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalState } from '../../../../components/global/ContextProvider';
import { BsStar, BsStarFill, BsFillImage } from 'react-icons/bs';
import SettingMenu from './SettingMenu';

const OptionBox = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const facilityUserId = facility.user_id;
  const { likes, id: sessionUserId } = globalState.auth.user;

  const like = async () => {
    try {
      dispatch({type: 'API_CALL_START'});
      const response = await axios.post('/api/likes/store', { facility_id: facilityId });
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'SET_LIKES', data: response.data});
    } catch (err) {
      console.log(err);
      dispatch({type: 'ALERT', text: 'エラーが発生しました。再度お試しください。'});
    }
  };
  if (globalState.auth.isLoggedIn) {
    return (
      <div className={className}>
        {
          // likeボタン
          likes.indexOf(Number(facilityId)) < 0 ?
            <BsStar className={`${className}__icon`} onClick={like} /> :
            <BsStarFill className={`${className}__iconLiked`} onClick={like} />
        }
        {
          // 表示中のFacilityがユーザー所有であれば編集ボタンを表示
          facilityUserId === sessionUserId &&
          <SettingMenu facilityId={facilityId} />
        }
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