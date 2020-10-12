import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../global/ContextProvider';
import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';
import Pagination from '../../../shared/Pagination';
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
          maxItems={6}
          collection={reviews}
          Component={ReviewItem} 
        /> :
        <div>口コミはまだありません。あなたの口コミを投稿してみませんか？</div>
      }
      <ReviewForm facilityId={facilityId} />
    </div>
  );
};

const StyledReviews = styled(Reviews)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export default StyledReviews;