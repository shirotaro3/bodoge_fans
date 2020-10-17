import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../global/ContextProvider';
import { mixinDivLink } from '../../shared/StyledCss';
import { Link } from 'react-router-dom';
import { ServicesSearchResult as Services } from '../FacilityServices';

const SearchResultItem = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  return (
    <div className={`${className} fadein`}>
      <div className={`${className}__img`}></div>
      <div className={`${className}__column`}>
        <div className={`${className}__name`}>{facility.name}</div>
        <div className={`${className}__description`}>{facility.description}</div>
        <Services facilityId={facility.id} />
      </div>
      <Link to={`/facilities/${facilityId}`} className={`${className}__link`} />
    </div>
  );
};

const StyledSearchResultItem = styled(SearchResultItem).attrs(props => {
    const [globalState, dispatch] = useGlobalState();
    const facility = globalState.facilities.data[props.facilityId];
    const imgUrl = facility.header_image_url;
    return ({
      bgImg: imgUrl ? `url(${imgUrl})` : 'none'
    });
})`
  ${mixinDivLink}
  margin: 30px 10px;
  display: flex;
  background: #555;
  color: #ddd;
  border-radius: 10px;
  align-items: center;
  overflow: hidden;
  transition: .1s;
  box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.3), 0 0px 0 1px rgba(0,0,0, 0.05);
  &:hover {
    transform: translateY(-3px);
  }
  &__img {
    height: 180px;
    width: 27%;
    background-image: ${props => props.bgImg};
    background-position: center;
    background-size: cover;
    border: 4px solid #555;
  }
  &__column {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 180px;
  }
  &__name {
    font-size: 1.3em;
    padding: 14px 20px;
    height: 45px;
    font-weight: bold;
  }
  &__description {
    padding: 10px 20px;
    flex: 1;
    border-bottom: 1px solid #999;
  }
`;

export default StyledSearchResultItem;