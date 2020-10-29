import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReviewListItem from './ReviewListItem';
import Paginate from '../PaginateLinks';
import { BoxRoundedNegative as Box } from '../Boxes';
import propTypes from 'prop-types';

const ReviewListPaginate = ({className, reviewIds, paginate, params, path}) => {
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
          <Paginate paginate={paginate} path={path} params={params} />
      }
    </div>
  );
};

ReviewListPaginate.propTypes = {
  className: PropTypes.string,
  reviewIds: PropTypes.array,
  paginate: PropTypes.object,
  params: PropTypes.object,
  path: propTypes.string
};

const StyledReviewListPaginate = styled(ReviewListPaginate)`
  max-width: 1000px;
  margin: 0 auto;
`;

export default StyledReviewListPaginate;