import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';
import _ from 'lodash';

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
        handleError(err);
      }
    };
    const fetchPickupFacilities = async () => {
      // ピックアップデータのフェッチ
      try {
        const response = await axios.get('/api/facilities');
        dispatch({
          type: 'SET_FACILITY_PICKUP',
          data: response.data
        });
      } catch (err) {
        handleError(err);
      }
    }
    const handleError = (err) => {
      console.log(err);
      dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
    };

    // リロード時のセッション確認
    if (sessionUser) {
      dispatch({type: 'LOGIN', data: sessionUser});
    }
    dispatch({type: 'AUTH_INITIALIZED'});

    // フェッチ実行
    fetchMasterData();
    fetchPickupFacilities();
  }, []);
  // ログイン状態が初期化されるまでは、アプリを表示しない
  return globalState.auth.initialized ? children : <></>;
};

export default Initializer;