import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReviewListItem from './ReviewListItem';
import Paginate from '../PaginateLinks';
import { BoxRoundedNegative as Box } from '../Boxes';

const ReviewListPaginate = ({className, reviewIds, paginate, params}) => {
  return (
    <div className={className}>
      {
        reviewIds.map((reviewId, i) => {
          return <ReviewListItem key={i} reviewId={reviewId} />;
        })
      }
      {
        reviewIds.length === 0 ?
          <Box>クチコミはまだありません。</Box> :
          <Paginate paginate={paginate} path='/reviews' params={params} />
      }
    </div>
  );
};

ReviewListPaginate.propTypes = {
  className: PropTypes.string,
  reviewIds: PropTypes.array,
  paginate: PropTypes.object,
  params: PropTypes.object
};

const StyledReviewListPaginate = styled(ReviewListPaginate)`
  max-width: 1000px;
  margin: 0 auto;
`;

export default StyledReviewListPaginate;