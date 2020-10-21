import React from 'react';
import styled from 'styled-components';
import FacilityListItem from './FacilityListItem';
import PageInfo from './PageInfo';
import Paginate from '../PaginateLinks';
import { BoxRoundedNegative as Box } from '../Boxes';

const FacilityListPaginate = ({className, facilityIds, paginate, params, path}) => {
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
          <Box>条件に合うお店は見つかりませんでした。</Box> :
          <Paginate paginate={paginate} params={params} path={path} />
      }
    </div>
  );
};

const StyledFacilityListPaginate = styled(FacilityListPaginate)`
  max-width: 1000px;
  margin: 0 auto;
`;

export default StyledFacilityListPaginate;