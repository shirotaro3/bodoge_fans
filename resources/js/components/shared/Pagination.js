import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Pagination = ({collection, Component, maxItems}) => {
  const [current, changeCurrent] = useState(0);
  const start = current * maxItems;
  const end = start + maxItems;
  const maxPages = Math.ceil(collection.length / maxItems) - 1;
  const slicedCollection = collection.slice(start, end);
  const next = () => {
    if (current < maxPages) {
      changeCurrent(current + 1);
    };
  };
  const prev = () => {
    if (current > 0) {
      changeCurrent(current - 1);
    };
  };
  return (
    <div id='pagination-top'>
      {
        slicedCollection.map((o, i)=>{
            return <Component {...o} key={i} />
          })
      }
      <PrevNext prev={prev} next={next} current={current} maxPages={maxPages} />
    </div>  
  );
};

const PrevNextBase = ({className, prev, next, current, maxPages}) => {
  return (
    <div className={`${className} page`}>
      <HashLink
        className={`${className}__button`}
        onClick={prev}
        to='#pagination-top'
        smooth
      >
        ←
      </HashLink>
      <span>
        {`${current + 1} / ${maxPages + 1}ページ`}
      </span>
      <HashLink
        className={`${className}__button`}
        onClick={next}
        to='#pagination-top'
        smooth
      >
        →
      </HashLink>
    </div>
  );
};

const PrevNext = styled(PrevNextBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  &__button {
    padding: 6px 10px;
    border-radius: 4px;
    margin: 0 10px;
    background: #eee;
    &:hover {
      background: #fff;
    }
  }
`;

export default Pagination;