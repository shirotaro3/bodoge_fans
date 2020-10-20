import React, { useEffect } from 'react';
import axios from 'axios';
import HeaderContainer from '../../components/facilities/HeaderContainer';
import FacilityServices from '../../components/shared/FacilityServices';
import Tabs from '../../components/facilities/Tabs';
import { useGlobalState } from '../../components/global/ContextProvider';
import NotFound from '../404';

const FacilitiesShow = ({match}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilityId = match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/facilities/${facilityId}`);
        dispatch({ type: 'SET_FACILITIES', data: [response.data]});
      } catch (err) {
      }
    };

    if (!globalState.facilities.data[facilityId]) {
      fetchData();
    }
  }, [facilityId]);

  if (globalState.facilities.data[facilityId]) {
    return (
      <div className='fadein'>
        <HeaderContainer
          facilityId={facilityId}
          imgUrl={globalState.facilities.data[facilityId].header_image_url}
        />
        <FacilityServices facilityId={facilityId} />
        <Tabs facilityId={facilityId} />
      </div>
    );
  }
  return <></>;
};

export default FacilitiesShow;