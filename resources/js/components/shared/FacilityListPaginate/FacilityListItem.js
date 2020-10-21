import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useGlobalState } from '../../global/ContextProvider';
import { divLink } from '../../shared/mixinCss';
import { Link } from 'react-router-dom';
import { ServicesSearchResult as Services } from '../FacilityServices';

const FacilityListItem = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  return (
    <div className={`${className} fadein`}>
      <div className={`${className}__flex`}>
        <div className={`${className}__img`}>
          <span className={`${className}__facility_type`}>{facility.m_facility_type.detail}</span>
        </div>
        <div className={`${className}__column`}>
          <div className={`${className}__name`}>{facility.name}</div>
          <div className={`${className}__description`}>{facility.description}</div>
          <div className={`${className}__hidden_tablet`}>
            <Services facilityId={facility.id} />
          </div>
        </div>
      </div>
      <div className={`${className}__show_less_than_tablet`}>
        <Services facilityId={facility.id} />
      </div>
      <Link to={`/facilities/${facilityId}`} className={`${className}__link`} />
    </div>
  );
};

const StyledFacilityListItem = styled(FacilityListItem).attrs(props => {
    const [globalState, dispatch] = useGlobalState();
    const facility = globalState.facilities.data[props.facilityId];
    const imgUrl = facility.header_image_url;
    return ({
      bgImg: imgUrl ? `url(${imgUrl})` : 'url(/img/boardgames.jpg)'
    });
})`
  ${divLink}
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
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
  &__flex {
    display: flex;
    width: 100%;
  }
  &__img {
    height: 180px;
    width: 30%;
    background-image: ${props => props.bgImg};
    background-position: center;
    background-size: cover;
    border: 4px solid #555;
    position: relative;
    ${media.lessThan('medium')`
      height: 130px;    
    `}
  }
  &__facility_type {
    background: #555;
    color: #ddd;
    padding: 4px 8px;
    position: absolute;
    border-radius: 4px;
    font-size: 12px;
    top: 3px;
    left: 3px;
    opacity: .9;
    ${media.lessThan('medium')`
      font-size: 10px;    
    `}
  }
  &__column {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 180px;
    ${media.lessThan('medium')`
      height: 130px;    
    `}
  }
  &__name {
    font-size: 20px;
    padding: 14px 20px;
    height: 45px;
    font-weight: bold;
    ${media.lessThan('medium')`
      padding: 10px 15px;
      font-size: 17px;
      height: 37px;
    `}
  }
  &__description {
    padding: 10px 20px;
    flex: 1;
    border-bottom: 1px solid #999;
    ${media.lessThan('medium')`
      padding: 10px 15px;
      font-size: 14px;    
    `}
  }
  &__hidden_tablet {
    ${media.lessThan('medium')`
      display: none;
    `}
  }
  &__show_less_than_tablet {
    display: none;
    ${media.lessThan('medium')`
      display: block;
      width: 100%;
    `}
  }
`;

export default StyledFacilityListItem;