import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';
import _ from 'lodash';
import networkService from './services/networkService';

const Initializer = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
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
    if (sessionUser) {
      dispatch({type: 'LOGIN', data: sessionUser});
    };
    dispatch({type: 'AUTH_INITIALIZED'});

    // 初期表示データ取得
    fetchMasterData();
    fetchPickupFacilities();

    // networkService初期化
    const onUnauthenticated = () => {
      dispatch({type: 'LOGOUT'});
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      dispatch({type: 'MESSAGE', text: '時間が経過したため、ログアウトされました。'})
    };
    const onInternalServerError = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      dispatch({type: 'ALERT', text: 'サーバーの処理に失敗しました。管理者までお問い合わせください。'});
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

export default Initializer;