import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
import axios from 'axios';
import queryString from 'query-string';
import Tiles from '../../../../shared/Tiles';
import { useGlobalState } from '../../../../global/ContextProvider';
import PaginateLinks from '../../../../shared/PaginateLinks';


const ForOwner = ({location, className}) => {
  const { page } = queryString.parse(location.search);
  const [globalState, dispatch] = useGlobalState();
  const data = globalState.myFacilitiesResults[page || 1];
  const tileValues = [
    {
      label: 'お店を登録',
      icon: BsPlusCircle,
      path: '/facilities/create'
    }
  ];
  const placeholder = [];
  for (let i = 0; i < 3; i++) {
    placeholder.push({label: ''});
  };
  const convertFacilityIdsToTileValues = (facilityIds) => {
    return facilityIds.map(id => {
      const facility = globalState.facilities.data[id];
      return {
        label: facility.name,
        path: `/facilities/${facility.id}`,
        bgImageUrl: facility.header_image_url
      }
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = globalState.auth.user.id;
        const response = await axios.get(`/api/users/${userId}/facilities`, { params: { page } });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        const resultFacilityIds = responseData.map(o => o.id);
        dispatch({
          type: 'SET_MY_FACILITIES_RESULTS',
          page: page || 1,
          data: responseData,
          paginate: paginate,
          result: resultFacilityIds
        });
      } catch (err) {
      };
    };
    if (!data) {
      fetchData();
    };
  }, [location.search]);
  return (
    <div className={`${className} fadein`} id='result-top'>
      {
        data ?
          <>
            <Tiles
              tileValues={[...tileValues, ...convertFacilityIdsToTileValues(data.result)]}
            />
            <PaginateLinks
              path='/users/dashboard/owner'
              paginate={data.paginate}
            />
          </> :
          <Tiles tileValues={[...tileValues, ...placeholder]} />
      }
    </div>
  );
};

const StyledForOwner = styled(ForOwner)`
`;

export default StyledForOwner;