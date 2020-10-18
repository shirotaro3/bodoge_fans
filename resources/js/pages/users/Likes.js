import React from 'react';
import { useGlobalState } from '../../components/global/ContextProvider';

const Likes = () => {
  const [globalState, dispatch] = useGlobalState();

  return (
    <div className='fadein'>
      
    </div>
  );
};

export default Likes;