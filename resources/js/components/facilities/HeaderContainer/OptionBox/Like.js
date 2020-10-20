import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useGlobalState } from '../../../../components/global/ContextProvider';

const Like = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const { likes } = globalState.auth.user;
  // const likesCount = facility.likes.length;

  const like = async () => {
    try {
      const response = await axios.post('/api/likes', { facility_id: facilityId });
      dispatch({type: 'SET_LIKES', data: response.data});
      dispatch({type: 'MESSAGE', text: 'お気に入りが変更されました。'});
    } catch (err) {
      console.log(err);
    }
  };
  // likeボタン
  return (
    <div className={className}>
      {
        likes.indexOf(Number(facilityId)) < 0 ?
          <BsStar className={`${className}__icon`} onClick={like} />:
          <BsStarFill className={`${className}__iconLiked`} onClick={like} />
      }
      {/* <div className={`${className}__count`}>{likesCount}</div> */}
    </div>
  );
};

const StyledLike = styled(Like)`
  position: relative;
  &__count {
    position: absolute;
    bottom: -15px;
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
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
`

export default StyledLike;