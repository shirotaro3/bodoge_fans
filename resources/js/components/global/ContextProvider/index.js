import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducers';

const initialState = {
  auth: {
    user: {},
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
  visibility: {
    userMenu: false,
    facilityMenu: false,
    modal: false,
    modalConfig: {
      type: 'CONFIRM',
      title: '',
      body: '',
      callback: () => {}
    },
    waiting: false,
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
  facilities: {
    data: {},
    pickedUpResult: {
      facilityIds: [],
      resolved: false
    },
    myFacilitiesResults: {},
    likedFacilityResults: {},
    searchResult: {
      facilityIds: [],
      paginate: {}
    },
  },
  reviews: {
    data: {},
    reviewsIndexResults: {},
  }
};

const Context = React.createContext();

const ContextProvider = ({children}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{globalState, dispatch}}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node
};

const useGlobalState = () => {
  const {globalState, dispatch} = useContext(Context);
  return [globalState, dispatch];
};

export { ContextProvider, useGlobalState };