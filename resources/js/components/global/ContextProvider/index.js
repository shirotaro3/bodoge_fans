import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducers';

const initialState = {
  auth: {
    user: {},
    isLoggedIn: false,
    initialized: false,
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
    waiting: 0,
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
    update: 0,
    pickedUpResult: {
      facilityIds: [],
      resolved: false
    },
    usersMineResult: {
      facilityIds: [],
      paginate: {}
    },
    usersLikeResult: {
      facilityIds: [],
      paginate: {}
    },
    searchResult: {
      facilityIds: [],
      paginate: {}
    },
  },
  reviews: {
    data: {},
    update: 0,
    indexResult: {
      reviewIds: [],
      paginate: {}
    },
    facilitiesShowResult: {
      reviewIds: [],
      paginate: {}
    }
  },
  events: {
    data: {},
    update: 0,
    indexResult: {
      eventIds: [],
      paginate: {}
    }
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