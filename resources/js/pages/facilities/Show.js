import React, { useEffect } from 'react';
import axios from 'axios';
import HeaderContainer from '../../components/facilities/HeaderContainer';
import Loading from '../../components/shared/Loading';
import { useGlobalState } from '../../components/global/ContextProvider';

const FacilitiesShow = ({match}) => {
  const [globalState, dispatch] = useGlobalState();
  const id = match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/facilities/${id}`).catch(err => {
        console.log(err);
        dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
      });
      dispatch({ type: 'SET_FACILITIES', data: response.data});
    }
    if (globalState.facilities.data[id]) {
      fetchData();
    }
  }, [id]);
  return (
    <div>
      {
        globalState.facilities.data[id] ?
        <>
          <HeaderContainer
            imgUrl={globalState.facilities.data[id].header_image_url}
            name={globalState.facilities.data[id].name}
            description={globalState.facilities.data[id].description}
          />
          FacilityID:{id}
        </> :
        <Loading />
      }
    </div>
  );
};

export default FacilitiesShow;