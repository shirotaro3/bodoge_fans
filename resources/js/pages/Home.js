import React from 'react';
import { Link } from 'react-router-dom';
import HeroBox from '../components/HeroBox';

const Home = () => {
  return (
      <div>
          <HeroBox />
          FirstView
          <Link to='/users/registration'>ユーザー登録</Link>
      </div>
  );
}

export default Home;