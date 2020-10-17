import React from 'react';
import styled from 'styled-components';
import SearchResultItem from './SearchResultItem';
import Paginate from './Paginate';

const SearchResult = ({className, facilityIds, paginate, params}) => {
  return (
    <div className={className}>
      {
        facilityIds.map((facilityId, i) => {
          return <SearchResultItem key={i} facilityId={facilityId} />
        })
      }
      {
        facilityIds.length === 0 ?
          <div className={`${className}__not_found fadein`}>条件に合うお店は見つかりませんでした。</div> :
          <Paginate paginate={paginate} params={params} />
      }
    </div>
  );
};

const StyledSearchResult = styled(SearchResult)`
  &__not_found {
    margin: 30px 10px;
    padding: 20px;
    background: #888;
    text-align: center;
    border-radius: 10px;
    color: #ddd;
  }
`;

export default StyledSearchResult;