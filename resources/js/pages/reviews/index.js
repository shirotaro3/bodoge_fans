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
  const data = globalState.reviews.indexResult;
  const isLoading = globalState.visibility.waiting > 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/reviews', { params: { page } });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        dispatch({
          type: 'SET_REVIEW_INDEX_RESULT',
          paginate: paginate,
          data: responseData
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location.search, globalState.reviews.update]);
  return (
    <div className='fadein' id='result-top'>
      <Hero />
      {
        isLoading ?
          <ReviewListPlaceholder /> :
          <ReviewListPaginate
            reviewIds={data.reviewIds}
            paginate={data.paginate}
            page={page}
            path='/reviews'
          />
      }
    </div>
  );
};

Reviews.propTypes = {
  location: PropTypes.object
};

export default Reviews;