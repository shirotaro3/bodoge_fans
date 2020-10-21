import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import queryString from 'query-string'
import FacilityListPaginate from '../../components/shared/FacilityListPaginate';
import FacilityListPlaceholder from '../../components/shared/FacilityListPlaceholder';
import HeroSearchBox from '../../components/shared/HeroSearchBox';

const Search = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  const params = queryString.parse(location.search);
  const data = globalState.searchResults[location.search];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/facilities/search', { params });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        // 検索結果としてfacilityIDの配列を作成
        const searchResult =
          responseData.length > 0 ?
            responseData.map(o => o.id) :
            [];
        dispatch({
          type: 'SET_FACILITIES_SEARCH_RESULT',
          queryString: location.search,
          result: searchResult,
          paginate: paginate,
          data: responseData
        });
      } catch (err) {
      }
    };
    if (!data) fetchData();
  }, [location.search]);
  return (
    <div className='fadein' id='result-top'>
      {
        globalState.masters.resolved &&
          <>
            <HeroSearchBox params={params} />
            {
              data ?
                <FacilityListPaginate
                  facilityIds={data.result}
                  paginate={data.paginate}
                  params={params}
                  path='/facilities/search'
                /> :
                <FacilityListPlaceholder />
            }
          </>
      }
    </div>
  );
};

export default Search;