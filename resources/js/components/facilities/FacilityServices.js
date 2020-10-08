import React from 'react';
import styled from 'styled-components';
import ServiceIcon from '../shared/ServiceIcon';
import { useGlobalState } from '../global/ContextProvider';

const Services = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const facilityServicesId = facility.m_services.map(o=>o.id);
  const { services, resolved } = globalState.masters;
  return (
    <div className={className}>
      {
        resolved &&
        services.map(s => {
          return (
            <ServiceIcon
              key={`s_${s.value}`}
              iconUrl={s.iconUrl}
              isLit={facilityServicesId.indexOf(s.value) >= 0}
              text={s.label}
            />
          );
        })
      }
      <span className={`${className}__headline`}>サービス</span>
    </div>
  );
};

const StyledServices = styled(Services)`
  box-shadow: 0 -8px 3px -3px rgba(0,0,0,.5);
  border-bottom: 12px solid #555;
  border-top: 12px solid #555;
  height: 74px;
  background: #555;
  position: relative;
  display: flex;
  justify-content: center;
  &__headline {
    position: absolute;
    top: -35px;
    left: 40px;
    font-size: 14px;
    color: #fff;
    background: #555;
    border-radius: 20px 20px 0 0;
    padding: 8px 40px 0 40px;
  }
`;

export default StyledServices;