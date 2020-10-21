import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useGlobalState } from '../../../global/ContextProvider';
import ReviewItem from '../../../shared/ReviewItem';
import ReviewForm from './ReviewForm';
import Pagination from '../../../shared/EasyPagination';
import { Link } from '../../../shared/Links';
import { BoxRoundedWhite as Box, BoxRoundedNegative as BoxNeg } from '../../../shared/Boxes';
import _ from 'lodash';

const Reviews = ({match, className}) => {
  const facilityId = match.params.id;
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const reviews = _.orderBy(facility.reviews, ['created_at'], ['desc']);
  return (
    <div className={`${className} page`}>
      <h2>{facility.name}のクチコミ</h2>
      {
        reviews.length > 0 ?
        <Pagination
          maxItems={5}
          collection={reviews}
          Component={ReviewItem} 
        /> :
        <BoxNeg>
          クチコミはまだありません。<br />あなたのクチコミを投稿してみませんか？
        </BoxNeg>
      }
      {
        globalState.auth.isLoggedIn ?
        <Box>
          <h3>クチコミを投稿</h3>
          <ReviewForm facilityId={facilityId} />
        </Box> :
        <div className={`${className}__text`}>
           今すぐ<Link to='/users/login'>ログイン</Link>して口コミを投稿しましょう。
        </div>
      }
    </div>
  );
};

const StyledReviews = styled(Reviews)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  ${media.lessThan('large')`
    max-width: 800px;
  `}
  h3 {
    text-align: center;
  }
`;

export default StyledReviews;