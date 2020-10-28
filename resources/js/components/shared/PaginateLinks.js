import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import queryString from 'query-string';

const Paginate = ({className, paginate, params = {}, path}) => {
  const {
    current_page: currentPage,
    last_page: lastPage,
  } = paginate;
  const generatePaginatePath = (pageNumber) => {
    const query = queryString.stringify({
      ...params,
      page: pageNumber
    });
    return `${path}?${query}`;
  };
  const pageLinks = [];
  for (let i = 1; i <= lastPage; i++) {
    if (currentPage === i) {
      pageLinks.push(
        // 現在のページのリンクは無効とする
        <span
          className={`${className}__disabled`}
          key={i}
        >
          {i}
        </span>
      );
    } else {
      pageLinks.push(
        // ページ数分だけ配列にリンクを追加
        <HashLink
          smooth
          to={generatePaginatePath(i)+'#result-top'}
          className={`${className}__button`}
          key={i}
        >
          {i}
        </HashLink>
      );
    }
  }
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

Paginate.propTypes = {
  className: PropTypes.string,
  params: PropTypes.object,
  paginate: PropTypes.object,
  path: PropTypes.string
};

const StyledPaginate = styled(Paginate)`
  display: flex;
  justify-content: center;
  margin: 5px 0;
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