import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import queryString from 'query-string';

const Paginate = ({className, paginate, params}) => {
  const {
    current_page: currentPage,
    last_page: lastPage,
    per_page: perPage,
    total
  } = paginate;
  const generatePaginatePath = (pageNumber) => {
    const query = queryString.stringify({
      ...params,
      page: pageNumber
    });
    return `/facilities/search?${query}`;
  };
  const pageLinks = [];
  for (let i = 0; i < lastPage; i++) {
    pageLinks.push(
      <HashLink
        smooth
        to={generatePaginatePath(i + 1)+'#result-top'}
        className={currentPage ===  i + 1 ? `${className}__disabled` : `${className}__button`}
        key={`${i}_page`}
      >
        {i + 1}
      </HashLink>
    );
  };
  return (
    <div className={className}>
      {
        currentPage === 1 ?
        <span className={`${className}__disabled`}>{'<'}</span> :
        <HashLink
          smooth
          to={generatePaginatePath(currentPage - 1)+'#result-top'}
          className={currentPage === 1 ? `${className}__disabled` : `${className}__button`}
        >
          {'<'}
        </HashLink>
      }
      {
        pageLinks
      }
      {
        currentPage === lastPage ?
        <span className={`${className}__disabled`}>{'>'}</span> :
        <HashLink
          smooth
          to={generatePaginatePath(currentPage + 1)+'#result-top'}
          className={`${className}__button`}
        >
          {'>'}
        </HashLink> 
      }
    </div>
  );
};

const StyledPaginate = styled(Paginate)`
  display: flex;
  justify-content: center;
  &__button {
    background: #eee;
    padding: 10px;
    margin: 2px;
    border-radius: 10px;
    &:hover {
      background: #fff;
    }
  }
  &__disabled {
    padding: 10px;
    margin: 2px;
    color: #555;
    cursor: default;
  }
`;

export default StyledPaginate;