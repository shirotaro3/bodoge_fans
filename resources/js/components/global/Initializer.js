import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';
import _ from 'lodash';

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
      const pickedUpFacilities = await axios.get('/api/facilities').catch((err) => {
        console.log(err);
        dispatch({type: 'ALERT', text: 'アプリの読み込みに失敗しました。リロードしても改善されない場合は管理者にご連絡ください。'});
      });
      const { facilityTypes, budgets, scales, prefectures, services } = masters.data;
      // 値をセット
      dispatch({
        type: 'SET_SELECT_VALUES',
        facilityTypes,
        budgets,
        scales,
        prefectures,
        services
      });
      dispatch({
        type: 'SET_FACILITY_PICKUP',
        data: pickedUpFacilities.data
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
  // ログインの有無でアクセスできるルートが変わるため、
  // ログイン状態が初期化されるまでは、アプリを表示しない
  return globalState.auth.initialized ? children : <></>;
};

export default Initializer;