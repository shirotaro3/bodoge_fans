import React from 'react';
import styled from 'styled-components';
import { LinkWhite as Link } from '../../../shared/Links';
import { useGlobalState } from '../../ContextProvider';
import PullDownMenu from './PullDownMenu';

const Authenticated = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
  const menuIsOpen = globalState.visibility.userMenu;
  return (
    <div className={className}>
      <PullDownMenu />
    </div>
  );
}

const StyledAuthenticated = styled(Authenticated)`
  
`;

export default StyledAuthenticated;