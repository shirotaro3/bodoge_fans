import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import HeaderContainer from '../../components/facilities/HeaderContainer';
import FacilityServices from '../../components/shared/FacilityServices';
import Tabs from '../../components/facilities/Tabs';
import { useGlobalState } from '../../components/global/ContextProvider';
import NotFound from '../404';

const FacilitiesShow = ({match}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilityId = Number(match.params.id);
  const facility = globalState.facilities.data[facilityId];
  const [isNotFound, setIsNotFound] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/facilities/${facilityId}`);
        dispatch({ type: 'SET_FACILITIES', data: [response.data]});
      } catch (err) {
        setIsNotFound(true);
      }
    };
    if (!facility) {
      fetchData();
    }
    document.getElementById('app_root').scrollTo({top: 0, left: 0, behavior: 'smooth' });
    // unmount時の処理
    return () => {
      // モーダル等を全て閉じる
      dispatch({type: 'CLOSE_ALL'});
    };
  }, [facilityId]);
  if (isNotFound) {
    return <NotFound />;
  }

  if (facility) {
    return (
      <div className='fadein'>
        <HeaderContainer
          facilityId={facilityId}
          imgUrl={facility.header_image_url}
        />
        <FacilityServices facilityId={facilityId} />
        <Tabs facilityId={facilityId} />
      </div>
    );
  }
  return <></>;
};

FacilitiesShow.propTypes = {
  match: PropTypes.object
};

export default FacilitiesShow;