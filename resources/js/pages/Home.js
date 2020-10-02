import React from 'react';
import { Link } from '../components/shared/Links';
import HeroBox from '../components/HeroBox';
import Slider from '../components/shared/FacilitiesSlider';

const Home = () => {
  return (
      <div>
          <HeroBox />
          <Slider />
          <Link to='/users/registration'>ユーザー登録</Link>
      </div>
  );
}

export default Home;