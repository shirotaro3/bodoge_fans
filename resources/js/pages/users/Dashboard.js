import React from 'react';
import DashBox from '../../components/users/Dashboard';
import Slider from '../../components/shared/FacilitiesSlider';

const Dashboard = () => {
  return (
    <div className='fadein'>
      <Slider />
      <DashBox />
    </div>
  );
};

export default Dashboard;