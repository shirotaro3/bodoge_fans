import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import axios from 'axios';
import { BsFillTrashFill } from 'react-icons/bs';
import { formatDate } from './utilities';
import Icon from './UserIcon';
import { useGlobalState } from '../global/ContextProvider';

const ReviewBox = ({className, id, title, body, user, created_at: postedAt}) => {
  const [globalState, dispatch] = useGlobalState();
  const authUser = globalState.auth.user;
  const deleteReview = async () => {
    try {
      const response = await axios.delete(`/api/reviews/${id}`);
      dispatch({type: 'DELETE_REVIEW', data: response.data});
      dispatch({type: 'MESSAGE', text: '削除しました。'});
    } catch (err) {
    }
  };
  const handleClick = () => {
    dispatch({
      type: 'MODAL_OPEN',
      title: 'レビューの削除',
      body: 'レビューを削除します。よろしいですか？',
      callback: deleteReview
    });
  };
  return (
    <div className={className}>
      <div className={`${className}__user`}>
        <Icon iconUrl={user?.icon_url} size='30px' />
        <div>{user.name}</div>
      </div>
      <div className={`${className}__container`}>      
        <span className={`${className}__title`}>{title}</span>
        <span className={`${className}__body`}>{body}</span>
        <span className={`${className}__date`}>{formatDate(postedAt)}に投稿されました</span>
        {
          user.id === authUser.id &&
          <div role='button' onClick={handleClick} className={`${className}__delete`}>
            <BsFillTrashFill size='20px' />
          </div>
        }
      </div>
    </div>
  );
};

const StyledReviewBox = styled(ReviewBox)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  ${media.lessThan('medium')`
    padding: 10px 0;
  `}
  &__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    width: 40px;
  }
  &__container {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #fff;
    padding: 55px 50px 40px 50px;
    border-radius: 15px;
    position: relative;
    margin-left: 20px;
    box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.1), 0 0px 0 1px rgba(0,0,0, 0.05);
    ${media.lessThan('medium')`
      padding: 25px 20px 15px 20px;
    `}
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 30%; 
      left: -24px;
      border: 12px solid transparent;
      border-right: 12px solid #fff;
    }
  }
  &__title {
    font-weight: bold;
    margin-bottom: 7px;

  }
  &__body {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin-bottom: 17px;
  }
  &__date {
    text-align: right;
    font-size: 13px;
    color: #777;
  }
  &__delete {
    position: absolute;
    top: 15px;
    right: 20px;
    opacity: .5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

export default StyledReviewBox;