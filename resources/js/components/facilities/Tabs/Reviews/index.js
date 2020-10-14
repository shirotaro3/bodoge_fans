import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../global/ContextProvider';
import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';
import Pagination from '../../../shared/Pagination';
import { Link } from '../../../shared/Links';
import _ from 'lodash';

const Reviews = ({match, className}) => {
  const facilityId = match.params.id;
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const reviews = _.orderBy(facility.reviews, ['created_at'], ['desc']);
  return (
    <div className={`${className} page`}>
      {
        reviews.length > 0 ?
        <Pagination
          maxItems={5}
          collection={reviews}
          Component={ReviewItem} 
        /> :
        <div className={`${className}__text`}>
          口コミはまだありません。あなたの口コミを投稿してみませんか？
        </div>
      }
      {
        globalState.auth.isLoggedIn ?
        <ReviewForm facilityId={facilityId} /> :
        <div className={`${className}__text`}>
           今すぐ<Link to='/users/login'>ログイン</Link>して口コミを投稿しましょう。
        </div>
      }
    </div>
  );
};

const StyledReviews = styled(Reviews)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  &__text {
    text-align: center;
    margin: 20px 0;
  }
`;

export default StyledReviews;