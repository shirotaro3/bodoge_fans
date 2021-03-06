import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import axios from 'axios';
import { BsFillTrashFill } from 'react-icons/bs';
import { formatDate } from '../utilities';
import Icon from '../UserIcon';
import { useGlobalState } from '../../global/ContextProvider';
import { Link } from '../Links';

const ReviewListItem = ({className, reviewId}) => {
  const [globalState, dispatch] = useGlobalState();
  const authUser = globalState.auth.user;
  const review = globalState.reviews.data[reviewId];
  const deleteReview = async () => {
    try {
      document.getElementById('app_root').scrollTo({top: 0, left: 0, behavior: 'smooth' });
      const response = await axios.delete(`/api/reviews/${reviewId}`);
      dispatch({type: 'REFRESH_REVIEW', data: response.data});
      dispatch({type: 'MESSAGE', text: '削除しました。'});
    } catch (err) {
      console.log(err);
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
    <div className={`${className} fadein`}>
      <div className={`${className}__user`}>
        <Icon iconUrl={review.user.icon_url} size='30px' />
        <div>{review.user.name}</div>
      </div>
      <div className={`${className}__container`}>
        <span className={`${className}__facilink`}>
          <Link to={`/facilities/${review.facility_id}`}>「{review.facility.name}」を利用しました♪</Link> 
        </span>
        <span className={`${className}__title`}>{review.title}</span>
        <span className={`${className}__body`}>{review.body}</span>
        <span className={`${className}__date`}>{formatDate(review.created_at)}に投稿</span>
        {
          review.user.id === authUser.id &&
          <div role='button' onClick={handleClick} className={`${className}__delete`}>
            <BsFillTrashFill size='20px' />
          </div>
        }
      </div>
    </div>
  );
};

ReviewListItem.propTypes = {
  className: PropTypes.string,
  reviewId: PropTypes.number
};

const StyledReviewListItem = styled(ReviewListItem)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  text-align: left;
  color: #333;
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
    padding: 35px 50px;
    border-radius: 15px;
    position: relative;
    margin-left: 20px;
    box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.1), 0 0px 0 1px rgba(0,0,0, 0.05);
    ${media.lessThan('medium')`
      padding: 15px 20px;
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
  &__facilink {
    font-size: 15px;
    margin-bottom: 30px;
    margin-left: -8px;
    color: #777;
    ${media.lessThan('medium')`
      font-size: 11px;
      margin-bottom: 15px;
    `}
  }
  &__title {
    font-weight: bold;
    margin-bottom: 7px;

  }
  &__body {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin-bottom: 25px;
    ${media.lessThan('medium')`
      margin-bottom: 15px;
    `}
  }
  &__date {
    text-align: right;
    font-size: 15px;
    color: #777;
    ${media.lessThan('medium')`
      font-size: 11px;
    `}
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

export default StyledReviewListItem;