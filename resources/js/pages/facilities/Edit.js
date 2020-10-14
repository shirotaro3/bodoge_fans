import React, { useEffect } from 'react';
import axios from 'axios';
import FacilitiesEditForm from '../../components/facilities/EditForm';
import { useGlobalState } from '../../components/global/ContextProvider';
import Loading from '../../components/shared/Loading';

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
        console.log(err);
        dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
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
      <div className='page'>
        <FacilitiesEditForm facilityId={facilityId} />
      </div>
    );
  }
  return <Loading />
};

export default FacilitiesEdit;