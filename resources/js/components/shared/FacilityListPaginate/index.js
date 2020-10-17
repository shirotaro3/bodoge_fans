import React from 'react';
import styled from 'styled-components';
import FacilityListItem from './FacilityListItem';
import PageInfo from './PageInfo';
import Paginate from './Paginate';

const FacilityListPaginate = ({className, facilityIds, paginate, params}) => {
  return (
    <div className={className}>
      <PageInfo paginate={paginate} />
      {
        facilityIds.map((facilityId, i) => {
          return <FacilityListItem key={i} facilityId={facilityId} />
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

const StyledFacilityListPaginate = styled(FacilityListPaginate)`
  &__not_found {
    margin: 30px 10px;
    padding: 20px;
    background: #888;
    text-align: center;
    border-radius: 10px;
    color: #ddd;
  }
`;

export default StyledFacilityListPaginate;