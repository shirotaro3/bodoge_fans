import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useGlobalState } from '../../../../components/global/ContextProvider';
import { BsPencilSquare } from 'react-icons/bs';
import Edit from './Edit';

const NameDescription = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const [isEditing, setIsEditing] = useState(false);
  const facility = globalState.facilities.data[facilityId];
  const authUser = globalState.auth.user;
  const isMine = authUser.id === facility.user_id;
  const handleClick = () => {
    if (isMine) {
      setIsEditing(!isEditing);
    }
  };
  return (
    <div className={className}>
      {
        isEditing ?
        <Edit cancel={handleClick} facilityId={facilityId} /> :
        <div className={`${className}__container`} onClick={handleClick}>
          <h1 className={`${className}__h1`}>{facility.name}</h1>
          <p className={`${className}__p`}>{facility.description}</p>
          <div className={`${className}__edit`}>
            <BsPencilSquare size='25px' />
          </div>
        </div>
      }
    </div>
  );
};

const StyledND = styled(NameDescription).attrs(props => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[props.facilityId];
  const authUser = globalState.auth.user;
  const isMine = authUser.id === facility.user_id;
  return ({ isMine });
})`
  color: #fff;
  width: 60%;
  ${media.lessThan('medium')`
    width: 100%;
  `}
  &__h1 {
    margin: 0;
    font-size: 36px;
    ${media.lessThan('small')`
      font-size: 24px;
    `}
  }
  &__p {
    font-size: 18px;
    ${media.lessThan('small')`
      font-size: 15px;
    `}
  }
  &__edit {
    opacity: 0;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  &__container {
    position: relative;
  }
  ${
    props => props.isMine &&
    `&__container {
      cursor: pointer;
      &:hover {
        background: rgba(255,255,255,.1);
      }
    }
    &__container:hover &__edit {
      opacity: .6;
    }`
  }
  ${
    props => props.isMine &&
      media.lessThan('medium')`
        background: rgba(255,255,255,.1);
        &__edit {
          opacity: .6;
        }
      `
  }
`;

export default StyledND;