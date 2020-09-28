import React from 'react';
import { useGlobalState } from '../../global/ContextProvider';

 const Logout = ({children}) => {
  const [globalState, dispatch] = useGlobalState();
  const handleClick = () => {
    dispatch({type: 'LOGOUT'})
  }
  return (
    <span onClick={handleClick}>{children}</span>
  );
 };

 export default Logout;