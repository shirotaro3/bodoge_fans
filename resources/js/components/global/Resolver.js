import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';

const Resolver = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    const fetchSelectValues = async () => {
      const selectValues = await Promise.all([
        axios.get('/api/facilityTypes'),
        axios.get('/api/budgets'),
        axios.get('/api/scales'),
        axios.get('/api/prefectures')
      ]);
      const facilityTypes = selectValues[0].data.map(v => {
        return { value: v.id, label: v.detail }
      });
      const budgets = selectValues[1].data.map(v => {
        return { value: v.id, label: v.detail }
      });
      const scales = selectValues[2].data.map(v => {
        return { value: v.id, label: v.detail }
      });
      const prefectures = selectValues[3].data.map(v => {
        return { value: v.id, label: v.name }
      });
      
      dispatch({
        type: 'SET_SELECT_VALUES',
        values: { facilityTypes, budgets, scales, prefectures }
      });
    };
    if (sessionUserName) {
      dispatch({type: 'LOGIN', name: sessionUserName});
    }
    dispatch({type: 'AUTH_RESOLVED'});
    fetchSelectValues();
  }, []);
  return globalState.auth.resolved ? children : <></>;
};

export default Resolver;