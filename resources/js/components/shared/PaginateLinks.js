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