import React, { useEffect } from 'react';
import axios from 'axios';
import HeaderContainer from '../../components/facilities/HeaderContainer';
import FacilityServices from '../../components/facilities/FacilityServices';
import Loading from '../../components/shared/Loading';
import Tabs from '../../components/facilities/Tabs';
import { useGlobalState } from '../../components/global/ContextProvider';

const FacilitiesShow = ({match}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilityId = match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/facilities/${facilityId}`).catch(err => {
        console.log(err);
        dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
      });
      dispatch({ type: 'SET_FACILITIES', data: [response.data]});
    };
    if (!globalState.facilities.data[facilityId]) {
      fetchData();
    }
  }, [facilityId]);
  if (globalState.facilities.data[facilityId]) {
    return (
      <div>
        <HeaderContainer
          facilityId={facilityId}
          imgUrl={globalState.facilities.data[facilityId].header_image_url}
        />
        <FacilityServices facilityId={facilityId} />
        <Tabs facilityId={facilityId} />
      </div>
    );
  }
  return <Loading />;
};

export default FacilitiesShow;