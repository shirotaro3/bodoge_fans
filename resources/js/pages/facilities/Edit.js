import React, { useEffect } from 'react';
import axios from 'axios';
import FacilitiesEditForm from '../../components/facilities/EditForm';
import { useGlobalState } from '../../components/global/ContextProvider';

const FacilitiesEdit = ({match}) => {
  const [globalState, dispatch] = useGlobalState();
  const facilityId = match.params.id;
  const facility = globalState.facilities.data[facilityId];
  const mastersResolved = globalState.masters.resolved;
  const sessionUserId = globalState.auth.user.id;
  const isMine = facility && facility.user_id === sessionUserId;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/facilities/${facilityId}`);
        dispatch({ type: 'SET_FACILITIES', data: [response.data]});
      } catch (err) {
      }
    };

    if (!facility) {
      // facilityがない時
      fetchData();
    } else if (!isMine) {
      // facilityがあるが、他ユーザーの所有するfacilityの時
      dispatch({type: 'REDIRECT', to: `/facilities/${facilityId}`});
      dispatch({type: 'MESSAGE', text: 'アクセス権限がありません。'});
    }
  }, [facilityId]);

  if (facility && mastersResolved) {
    // facilityデータとマスタデータがあるとき
    return (
      <div className='fadein'>
        <FacilitiesEditForm facilityId={facilityId} />
      </div>
    );
  }
  return <></>
};

export default FacilitiesEdit;