import React from 'react';
import Loading from '../../components/shared/Loading';
import { useGlobalState } from '../../components/global/ContextProvider';

const Likes = () => {
  const [globalState, dispatch] = useGlobalState();
  return (
    <div className='page'>
      
    </div>
  );
};

export default Likes;