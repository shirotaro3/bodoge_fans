import React from 'react';
import styled from 'styled-components';
import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';
import { useGlobalState } from '../../../global/ContextProvider';

const Sns = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  return (
    <div className={className}>
      {
        facility.twitter &&
        <a href={`https://twitter.com/${facility.twitter}`} target="_blank" rel="noopener noreferrer">
          <AiFillTwitterSquare size='40px' />
        </a>
      }
      {
        facility.instagram &&
        <a href={`https://www.instagram.com/${facility.instagram}`} target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size='40px' />
        </a>
      }
      {
        facility.facebook &&
        <a href={`https://www.facebook.com/${facility.facebook}`} target="_blank" rel="noopener noreferrer">
          <AiFillFacebook size='40px' />
        </a>
      }
      {
        facility.line &&
        <a href={`${facility.line}`} target="_blank" rel="noopener noreferrer">
          <FaLine size='40px' />
        </a>
      }
    </div>
  );
};

const StyledSns = styled(Sns)`
  display: flex;
`;

export default StyledSns;