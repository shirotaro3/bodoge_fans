import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';
import networkService from './services/networkService';

const Initializer = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  const pickedUpFacilitiesId = globalState.pickedUpFacilitiesId;
  const masters = globalState.masters;
  const auth = globalState.auth;
  useEffect(() => {
    const fetchMasterData = async () => {
      // マスタデータのフェッチ
      try {
        const response = await axios.get('/api/masters');
        const { facilityTypes, budgets, scales, prefectures, services } = response.data;
        // 値をセット
        dispatch({
          type: 'SET_MASTERS',
          facilityTypes,
          budgets,
          scales,
          prefectures,
          services
        });
      } catch (err) {
        dispatch({type: 'ALERT', text: 'サイトの読み込みに失敗しました。'});
      }
    };
    const fetchPickupFacilities = async () => {
      // ピックアップデータのフェッチ
      try {
        const response = await axios.get('/api/facilities/pickup');
        dispatch({
          type: 'SET_FACILITY_PICKUP',
          data: response.data
        });
      } catch (err) {
        dispatch({type: 'ALERT', text: 'サイトの読み込みに失敗しました。'});
      }
    };

    // ログインステータスの初期化
    /* eslint-disable no-undef */
    if (sessionUser && !auth.initialized) {
      dispatch({type: 'LOGIN', data: sessionUser});
    }
    /* eslint-enable no-undef */
    dispatch({type: 'AUTH_INITIALIZED'});

    // マスタデータ取得
    if (!masters.resolved) {
      fetchMasterData();
    }

    // ピックアップが取得されていない状態なら取得する
    if (!pickedUpFacilitiesId.resolved) {
      fetchPickupFacilities();
    }

    // networkService初期化
    const onUnauthenticated = () => {
      dispatch({type: 'LOGOUT'});
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      dispatch({type: 'MESSAGE', text: '時間が経過したため、再度ログインしてください。'});
    };
    const onInternalServerError = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      dispatch({type: 'ALERT', text: 'サーバーの処理に失敗しました。'});
    };
    const onRequest = () => {
      dispatch({type: 'API_CALL_START'});
    };
    const onResponse = () => {
      dispatch({type: 'API_CALL_END'});
    };
    networkService.init({
      onUnauthenticated,
      onInternalServerError,
      onRequest,
      onResponse
    });
  }, []);
  // ログインステータスが初期化されるまでは、アプリを表示しない
  return globalState.auth.initialized ? children : <></>;
};

Initializer.propTypes = {
  children: PropTypes.node
};

export default Initializer;