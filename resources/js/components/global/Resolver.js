import React, { useEffect } from 'react';
import { useGlobalState } from './ContextProvider';
import axios from 'axios';

const Resolver = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await Promise.all([
        axios.get('/api/facilityTypes'),
        axios.get('/api/budgets'),
        axios.get('/api/scales'),
        axios.get('/api/prefectures'),
        axios.get('/api/facilities')
      ]);
      const facilityTypes = response[0].data.map(v => {
        return { value: v.id, label: v.detail }
      });
      const budgets = response[1].data.map(v => {
        return { value: v.id, label: v.detail }
      });
      const scales = response[2].data.map(v => {
        return { value: v.id, label: v.detail }
      });
      const prefectures = response[3].data.map(v => {
        return { value: v.id, label: v.name }
      });
      
      dispatch({
        type: 'SET_SELECT_VALUES',
        values: { facilityTypes, budgets, scales, prefectures }
      });
      dispatch({
        type: 'SET_FACILITY_PICKUP',
        data: response[4].data
      });
    };
    if (sessionUserName) {
      dispatch({type: 'LOGIN', name: sessionUserName});
    }
    dispatch({type: 'AUTH_RESOLVED'});
    fetchData();
  }, []);
  return globalState.auth.resolved ? children : <></>;
};

export default Resolver;