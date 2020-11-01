import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';
import networkService from './services/networkService';

const Initializer = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  const history = useHistory();
  const pickedUpResult = globalState.facilities.pickedUpResult;
  const masters = globalState.masters;
  const auth = globalState.auth;
  useEffect(() => {
    const fetchInitialData = async () => {
      // InitialDataのフェッチ
      try {
        const response = await axios.get('/api/app/init');
        const {
          facilityTypes,
          budgets,
          scales,
          prefectures,
          services,
          user
        } = response.data;
        // マスターデータをセット
        dispatch({
          type: 'SET_MASTERS',
          facilityTypes,
          budgets,
          scales,
          prefectures,
          services
        });

        // ログインステータスの初期化
        if (!auth.initialized) {
          if (user) {
            dispatch({type: 'LOGIN', data: user});
          }
          dispatch({type: 'AUTH_INIT'});
        }
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

    // networkService初期化
    const onUnauthenticated = () => {
      dispatch({type: 'LOGOUT'});
      document.getElementById('app_root').scrollTo({top: 0, left: 0, behavior: 'smooth' });
      dispatch({type: 'MESSAGE', text: '時間が経過したため、再度ログインしてください。'});
      history.push('/users/login');
    };
    const onInternalServerError = () => {
      document.getElementById('app_root').scrollTo({top: 0, left: 0, behavior: 'smooth' });
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

    // 初期データ取得
    if (!masters.resolved) {
      fetchInitialData();
    }

    // ピックアップが取得されていない状態なら取得する
    if (!pickedUpResult.resolved) {
      fetchPickupFacilities();
    }
  }, []);
  // ログインステータスが初期化されるまでは、アプリを表示しない
  return globalState.auth.initialized ? children : <></>;
};

Initializer.propTypes = {
  children: PropTypes.node
};

export default Initializer;