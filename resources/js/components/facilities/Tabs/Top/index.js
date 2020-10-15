import React, {useState} from 'react';
import styled from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';
import { useGlobalState } from '../../../global/ContextProvider';
import Edit from './Edit';
import Sidebar from './Sidebar';

const Top = ({className, match}) => {
  const facilityId = match.params.id;
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
    <div className={`${className} page`}>
      <div className={`${className}__main`}>
        <h3>{facility.name}より</h3>
        {
          isEditing ?
          <Edit facilityId={facilityId} cancel={handleClick} /> :
          <div onClick={handleClick} className={`${className}__intr`}>
            {facility.introduction}
            <div className={`${className}__edit`}>
              <BsPencilSquare size='25px' />
            </div>
          </div>
        }
      </div>
      <div className={`${className}__sidebar`}>
        <Sidebar facilityId={facilityId} />
      </div>
    </div>
  );
};

const StyledTop = styled(Top).attrs(props => {
  const facilityId = props.match.params.id;
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const authUser = globalState.auth.user;
  const isMine = authUser.id === facility.user_id;
  return ({ isMine });
})`
  display: flex;
  &__intr {
    min-height: 50px;
    white-space: pre-wrap;
    position: relative;
  }
  &__edit {
    opacity: 0;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &__main {
    flex: 1;
    padding: 10px 20px;
    margin: 10px;
  }
  &__sidebar {
    width: 100%;
    max-width: 250px;
  }
  ${
    props => props.isMine &&
    `&__intr {
      cursor: pointer;
      &:hover {
        background: rgba(0,0,0,.1);
      }
    }
    &__intr:hover &__edit {
      opacity: .6;
    }`
  }
`;

export default StyledTop;