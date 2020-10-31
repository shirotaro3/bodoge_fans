import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useGlobalState } from '../../../global/ContextProvider';
import SettingMenu from './SettingMenu';
import Like from './Like';
import EditImage from './EditImage';

const OptionBox = ({className, facilityId}) => {
  const [globalState, ] = useGlobalState();
  if (globalState.auth.isLoggedIn) {
    return (
      <div className={className}>
        <Like facilityId={facilityId} />
        <EditImage facilityId={facilityId} />
        <SettingMenu facilityId={facilityId} />
      </div>
    );
  }
  return <></>;
};

OptionBox.propTypes = {
  className: PropTypes.string,
  facilityId: PropTypes.number
};

const StyledOptionBox = styled(OptionBox)`
  position: absolute;
  display: flex;
  padding: 10px;
  margin: 10px;
  top: 0;
  right: 0;
  color: #fff;
`;

export default StyledOptionBox;