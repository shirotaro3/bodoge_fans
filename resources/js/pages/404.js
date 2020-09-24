import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = ({className}) => {
  return (
    <div className={className}>
      <h2>404 NotFound</h2>
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
`

export default StyledNotFound;