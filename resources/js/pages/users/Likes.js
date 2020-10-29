import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import queryString from 'query-string';
import { useGlobalState } from '../../components/global/ContextProvider';
import FacilityListPaginate from '../../components/shared/FacilityListPaginate';
import FacilityListPlaceholder from '../../components/shared/FacilityListPlaceholder';
import { BoxRoundedNegative as Box } from '../../components/shared/Boxes';

const Likes = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  const { page } = queryString.parse(location.search);
  const { likes, name: userName } = globalState.auth.user;
  const isLoading = globalState.visibility.waiting > 0;
  const params = { page, id: likes };
  const data = globalState.facilities.usersLikeResult;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/facilities/search', { params });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        dispatch({
          type: 'SET_FACILITY_USERS_LIKE_RESULT',
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
  }, [location.search]);
  return (
    <div className='fadein' id='result-top'>
      <h1 className='text-center'>{userName}さんのお気に入り</h1>
      {
        likes.length > 0 ?
          <>
            {
              isLoading ?
                <FacilityListPlaceholder /> :
                <FacilityListPaginate
                  facilityIds={data.facilityIds}
                  paginate={data.paginate}
                  params={{page}}
                  path='/users/likes'
                />
            }
          </> :
          <Box>お気に入りは登録されていません。</Box>
      }
    </div>
  );
};

Likes.propTypes = {
  location: PropTypes.object
};

export default Likes;