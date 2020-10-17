import React from 'react';
import { Link } from '../components/shared/Links';
import HeroSearchBox from '../components/shared/HeroSearchBox';
import Slider from '../components/shared/FacilitiesSlider';
import Events from '../components/home/Events';

const Home = () => {
  return (
      <div className='fadein'>
          <HeroSearchBox />
          <Slider />
          {/* <Events /> */}
      </div>
  );
}

export default Home;