import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { BsPencilSquare } from 'react-icons/bs';
import { useGlobalState } from '../../../global/ContextProvider';
import Edit from './Edit';
import Sidebar from './Sidebar';

const Top = ({className, match}) => {
  const facilityId = match.params.id;
  const [globalState, ] = useGlobalState();
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
        <h2>{facility.name}より</h2>
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

Top.propTypes = {
  className: PropTypes.string,
  match: PropTypes.object
};

const StyledTop = styled(Top).attrs(props => {
  const facilityId = props.match.params.id;
  const [globalState, ] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const authUser = globalState.auth.user;
  const isMine = authUser.id === facility.user_id;
  return ({ isMine });
})`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  ${media.lessThan('large')`
    max-width: 800px;
  `}
  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
  &__intr {
    min-height: 50px;
    white-space: pre-wrap;
    position: relative;
    padding: 20px 15px;
    font-size: 15px;
    ${media.lessThan('medium')`
      width: 100%;
    `}
  }
  &__edit {
    opacity: 0;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &__main {
    flex: 1;
    margin-right: 10px;
  }
  &__sidebar {
    width: 100%;
    max-width: 250px;
    ${media.lessThan('medium')`
      max-width: 100%;
    `}
  }
  ${
  props => props.isMine &&
    `&__intr {
      cursor: pointer;
    }
    &__intr:hover &__edit {
      opacity: .6;
    }`
}
  ${
  props => props.isMine &&
      media.lessThan('medium')`
        &__edit {
          opacity: .6;
        }
      `
}
`;

export default StyledTop;