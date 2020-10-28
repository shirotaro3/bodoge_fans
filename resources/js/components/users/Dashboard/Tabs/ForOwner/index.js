import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
  const data = globalState.facilities.usersMineResult;
  const isLoading = globalState.visibility.waiting;
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
  }
  const convertFacilityIdsToTileValues = (facilityIds) => {
    return facilityIds.map(id => {
      const facility = globalState.facilities.data[id];
      return {
        label: facility.name,
        path: `/facilities/${facility.id}`,
        bgImageUrl: facility.header_image_url
      };
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = globalState.auth.user.id;
        const response = await axios.get(`/api/users/${userId}/facilities`, { params: { page } });
        const { current_page, last_page, per_page, total, data: responseData } = response.data;
        const paginate = { current_page, last_page, per_page, total };
        dispatch({
          type: 'SET_FACILITY_USERS_MINE_RESULT',
          data: responseData,
          paginate: paginate,
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
    <div className={`${className} fadein`} id='result-top'>
      {
        isLoading ?
          <Tiles tileValues={[...tileValues, ...placeholder]} /> :
          <>
            <Tiles
              tileValues={[...tileValues, ...convertFacilityIdsToTileValues(data.facilityIds)]}
            />
            <PaginateLinks
              path='/users/dashboard/owner'
              paginate={data.paginate}
            />
          </>
      }
    </div>
  );
};

ForOwner.propTypes = {
  location: PropTypes.object,
  className: PropTypes.string
};

const StyledForOwner = styled(ForOwner)`
`;

export default StyledForOwner;