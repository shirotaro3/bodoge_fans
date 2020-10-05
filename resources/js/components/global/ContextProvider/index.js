import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

const initialState = {
  auth: {
    name: '',
    id: null,
    isLoggedIn: false,
    initialized: false,
  },
  redirect: {
    path: '',
  },
  notice: {
    text: '',
    isShow: false,
    type: 'MESSAGE',
    color: '#fff'
  },
  tracking: {
    afterLoginPath: '',
  },
  masters: {
    facilityTypes: [{value: '', label: ''}],
    budgets: [{value: '', label: ''}],
    scales: [{value: '', label: ''}],
    prefectures: [{value: '', label: ''}],
    services: [{value: '', label: '', iconUrl: ''}],
    resolved: false
  },
  pickedUpFacilitiesId: {
    data: [],
    resolved: false
  },
  likedFacilitiesId: {
    data: [],
  },
  facilities: {
    data: {}
  },
}

const Context = React.createContext();

const ContextProvider = ({children}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{globalState, dispatch}}>
      {children}
    </Context.Provider>
  )
};

const useGlobalState = () => {
  const {globalState, dispatch} = useContext(Context);
  return [globalState, dispatch];
};

export { ContextProvider, useGlobalState }