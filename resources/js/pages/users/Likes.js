import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useGlobalState } from '../../components/global/ContextProvider';
import FacilityListPaginate from '../../components/shared/FacilityListPaginate';
import FacilityListPlaceholder from '../../components/shared/FacilityListPlaceholder';
import { BoxRoundedNegative as Box } from '../../components/shared/Boxes';

const Likes = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  // pageだけ使用
  const { page } = queryString.parse(location.search);
  const { likes, name: userName } = globalState.auth.user;
  const params = { page, id: likes };
  const data = globalState.likedFacilityResults[page || 1];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/facilities/search', { params });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        // facilityIDの配列を作成
        const searchResult =
          responseData.length > 0 ?
            responseData.map(o => o.id) :
            [];
        dispatch({
          type: 'SET_USER_LIKES_RESULT',
          page: page || 1,
          result: searchResult,
          paginate: paginate,
          data: responseData
        });
      } catch (err) {
      }
    };
    if (likes.length > 0 && !data) fetchData();
  }, [location.search]);
  return (
    <div className='fadein' id='result-top'>
      <h1 className='text-center'>{userName}さんのお気に入り</h1>
      {
        likes.length > 0 ?
        <>
          {
            data ?
              <FacilityListPaginate
                facilityIds={data.result}
                paginate={data.paginate}
                params={{page}}
                path='/users/likes'
              /> :
              <FacilityListPlaceholder />
          }
        </> :
        <Box>お気に入りは登録されていません。</Box>
      }
    </div>
  );
};

export default Likes;