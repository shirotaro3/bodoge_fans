import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import queryString from 'query-string';
import ReviewListPaginate from '../../components/shared/ReviewListPaginate';
import Hero from '../../components/reviews/Hero';
import ReviewListPlaceholder from '../../components/shared/ReviewListPlaceholder';

const Reviews = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  const { page } = queryString.parse(location.search);
  const data = globalState.reviews.reviewsIndexResults[page || 1];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/reviews', { params: { page } });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        // 検索結果としてreviewIDの配列を作成
        const searchResult = responseData.map(o => o.id);
        dispatch({
          type: 'SET_REVIEWS_INDEX_RESULT',
          page: page || 1,
          result: searchResult,
          paginate: paginate,
          data: responseData
        });
      } catch (err) {
        //
      }
    };
    if (!data) fetchData();
  }, [location.search, data]);
  return (
    <div className='fadein' id='result-top'>
      <Hero />
      {
        data ?
          <ReviewListPaginate
            reviewIds={data.result}
            paginate={data.paginate}
            page={page}
          /> :
          <ReviewListPlaceholder />
      }
    </div>
  );
};

Reviews.propTypes = {
  location: PropTypes.object
};

export default Reviews;