import React from 'react';
import { Link } from '../components/shared/Links';
import styled from 'styled-components';
import { FaChess } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NotFound = ({className}) => {
  return (
    <div className={className}>
      <IconContext.Provider value={{ size: 22, style: { display: 'inline-block' } }}>
        <FaChess />
      </IconContext.Provider>
      <h1>404 NotFound</h1>
      <p>The page you specified may no longer exist or has been deleted.</p>
      <p>ご指定のページは存在しないか削除された可能性があります。</p>
      <Link to='/'>トップページへ戻る</Link>
    </div>
  );
}

const StyledNotFound = styled(NotFound)`
  text-align: center;
  background: #ccc;
  margin: 30px;
  padding: 40px;
  border-radius: 10px;
  h1 {
    font-size: 30px;
  }
`

export default StyledNotFound;