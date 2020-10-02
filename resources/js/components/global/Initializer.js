import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';

const Initializer = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    const fetchData = async () => {
      // マスタデータのフェッチ
      const masters = await axios.get('/api/masters').catch((err) => {
        console.log(err);
        dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
      });
      // ピックアップデータのフェッチ
      const facilityPickup = await axios.get('/api/facilities').catch((err) => {
        console.log(err);
        dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
      });
      // アプリで使用する形に整形
      const facilityTypes = masters.data.facilityTypes.map(v => {
        return { value: v.id, label: v.detail }
      });
      const budgets = masters.data.budgets.map(v => {
        return { value: v.id, label: v.detail }
      });
      const scales = masters.data.scales.map(v => {
        return { value: v.id, label: v.detail }
      });
      const prefectures = masters.data.prefectures.map(v => {
        return { value: v.id, label: v.name }
      });
      // 値をセット
      dispatch({
        type: 'GET_SELECT_VALUES_OK',
        values: { facilityTypes, budgets, scales, prefectures }
      });
      dispatch({
        type: 'GET_FACILITY_PICKUP_OK',
        data: facilityPickup.data
      });
    };

    // リロード時のセッション確認
    if (sessionUserName) {
      dispatch({type: 'LOGIN', name: sessionUserName});
    }
    dispatch({type: 'AUTH_INITIALIZED'});

    // フェッチ実行
    fetchData();
  }, []);
  return globalState.auth.initialized ? children : <></>;
};

export default Initializer;