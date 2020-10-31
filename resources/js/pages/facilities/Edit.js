import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import FacilitiesEditForm from '../../components/facilities/EditForm';
import { useGlobalState } from '../../components/global/ContextProvider';
import NotFound from '../404';

const FacilitiesEdit = ({match}) => {
  const [globalState, dispatch] = useGlobalState();
  const history = useHistory();
  const [isNotFound, setIsNotFound] = useState(false);
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
        setIsNotFound(true);
      }
    };

    if (!facility) {
      // facilityがない時
      fetchData();
    } else if (!isMine) {
      // facilityがあるが、他ユーザーの所有するfacilityの時
      history.push(`/facilities/${facilityId}`);
      dispatch({type: 'MESSAGE', text: 'アクセス権限がありません。'});
    }
  }, [facilityId]);

  if (isNotFound) {
    return <NotFound />;
  }

  if (facility && mastersResolved) {
    // facilityデータとマスタデータがあるとき
    return (
      <div className='fadein'>
        <FacilitiesEditForm facilityId={facilityId} />
      </div>
    );
  }
  return <></>;
};

FacilitiesEdit.propTypes = {
  match: PropTypes.object
};

export default FacilitiesEdit;