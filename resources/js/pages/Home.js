import React from 'react';
import { Link } from '../components/shared/Links';
import HeroBox from '../components/home/HeroBox';
import Slider from '../components/shared/FacilitiesSlider';
import Events from '../components/home/Events';

const Home = () => {
  return (
      <div className='page'>
          <HeroBox />
          <Slider />
          {/* <Events /> */}
      </div>
  );
}

export default Home;