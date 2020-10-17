import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../components/global/ContextProvider';
import queryString from 'query-string'
import SearchResult from '../../components/facilities/SearchResult';
import SearchPlaceholder from '../../components/facilities/SearchPlaceholder';
import HeroSearchBox from '../../components/shared/HeroSearchBox';

const Search = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  const params = queryString.parse(location.search);
  const data = globalState.searchResults[location.search];
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'API_CALL_START'});
      const response = await axios.get('/api/facilities/search', { params: params });
      dispatch({type: 'API_CALL_END'});
      const { current_page, last_page, per_page, total, data: responseData } = response.data;
      const paginate = { current_page, last_page, per_page, total };
      // 検索結果としてfacilityIDの配列を作成
      const searchResult =
        responseData.length > 0 ?
          responseData.map(o => o.id) :
          [];
      dispatch({
        type: 'SET_SEARCH_RESULT',
        queryString: location.search,
        result: searchResult,
        paginate: paginate,
        data: responseData
      });
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
                <SearchResult
                  facilityIds={data.result}
                  paginate={data.paginate}
                  params={params}
                /> :
                <SearchPlaceholder />
            }
          </>
      }
    </div>
  );
};

export default Search;