import React from 'react';
import { Link } from 'react-router-dom';
import HeroBox from '../components/HeroBox';

const FirstView = () => {
  return (
      <div>
          <HeroBox />
          FirstView
          <Link to='/users/registration'>ユーザー登録</Link>
      </div>
  )
}

export default FirstView;