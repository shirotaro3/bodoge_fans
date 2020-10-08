import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../../global/ContextProvider';
import ReviewBox from './ReviewBox';

const Reviews = ({match, className}) => {
  const facilityId = match.params.id;
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const reviews = facility.reviews;
  return (
    <div className={className}>
      {
        reviews.length > 0 ?
        reviews.map((o, i)=>{
          return <ReviewBox key={o.id} title={o.title} body={o.body} />
        }) :
        <div>口コミはまだありません。</div>
      }
    </div>
  );
};

const StyledReviews = styled(Reviews)`
  
`;

export default StyledReviews;