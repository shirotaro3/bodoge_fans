import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import axios from 'axios';
import queryString from 'query-string';
import { useGlobalState } from '../../../global/ContextProvider';
import ReviewForm from './ReviewForm';
import { Link } from '../../../shared/Links';
import { BoxRoundedWhite as Box, BoxRoundedNegative as BoxNeg } from '../../../shared/Boxes';
import ReviewListPaginate from '../../../shared/ReviewListPaginate';
import ReviewListPlaceholder from '../../../shared/ReviewListPlaceholder';


const Reviews = ({match, location, className}) => {
  const facilityId = match.params.id;
  const { page } = queryString.parse(location.search);
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const data = globalState.reviews.facilitiesShowResult;
  const isLoading = globalState.visibility.waiting > 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/facilities/${facilityId}/reviews`, { params: { page } });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        dispatch({
          type: 'SET_REVIEW_FACILITIES_SHOW_RESULT',
          paginate: paginate,
          data: responseData
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // willUnmount
    return () => {
      dispatch({type: 'CLEAR_RESULTS'});
    };
  }, [location.search, globalState.reviews.update]);
  return (
    <div className={`${className} fadein`} id='result-top'>
      <h2>{facility.name}のクチコミ</h2>
      {
        isLoading ?
          <ReviewListPlaceholder /> :
          <>
            {
              data.reviewIds.length > 0 ?
                <ReviewListPaginate
                  reviewIds={data.reviewIds}
                  paginate={data.paginate}
                  page={page}
                  path={`/facilities/${facilityId}/reviews`}
                /> :
                <BoxNeg>
                  クチコミはまだありません。<br />あなたのクチコミを投稿してみませんか？
                </BoxNeg>
            }
          </>
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

Reviews.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
  location: PropTypes.object
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
  &__text {
    text-align: center;
    padding: 20px 0;
  }
`;

export default StyledReviews;