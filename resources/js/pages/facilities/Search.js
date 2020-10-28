import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import queryString from 'query-string';
import FacilityListPaginate from '../../components/shared/FacilityListPaginate';
import FacilityListPlaceholder from '../../components/shared/FacilityListPlaceholder';
import HeroSearchBox from '../../components/shared/HeroSearchBox';

const Search = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  const params = queryString.parse(location.search);
  const searchResult = globalState.facilities.searchResult;
  const isLoading = globalState.visibility.waiting;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/facilities/search', { params });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        dispatch({
          type: 'SET_FACILITY_SEARCH_RESULT',
          paginate: paginate,
          data: responseData,
        });
      } catch (err) {
        //
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
      {
        globalState.masters.resolved &&
          <>
            <HeroSearchBox params={params} />
            {
              isLoading ?
                <FacilityListPlaceholder /> :
                <FacilityListPaginate
                  facilityIds={searchResult.facilityIds}
                  paginate={searchResult.paginate}
                  params={params}
                  path='/facilities/search'
                />
            }
          </>
      }
    </div>
  );
};

Search.propTypes = {
  location: PropTypes.object
};

export default Search;