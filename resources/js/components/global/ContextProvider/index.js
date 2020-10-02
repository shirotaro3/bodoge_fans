import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

const initialState = {
  auth: {
    name: null,
    isLoggedIn: false,
    resolved: false,
  },
  redirect: {
    path: null,
    isExecuted: true,
  },
  notice: {
    text: '',
    isShow: false,
    type: 'MESSAGE',
    color: '#fff'
  },
  tracking: {
    afterLoginPath: null,
  },
  selectValues: {
    facilityTypes: [{value: '', label: ''}],
    budgets: [{value: '', label: ''}],
    scales: [{value: '', label: ''}],
    prefectures: [{value: '', label: ''}],
    resolved: false
  },
  facilityPickup: {
    data: [],
    resolved: false
  }
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