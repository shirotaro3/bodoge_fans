import React from 'react';
import styled from 'styled-components';
import { AiFillTwitterSquare, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';
import { useGlobalState } from '../../../global/ContextProvider';

const Sidebar = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  return (
    <div className={className}>
      <h3>Information</h3>
      <ul className={`${className}__info`}>
        <li>
          業態：{facility.m_facility_type.detail}
        </li>
        <li>
          予算：{facility.m_budget.detail}
        </li>
        <li>
          最大人数：{facility.m_scale.detail}
        </li>
      </ul>
      <div className={`${className}__sns_group`}>
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
    </div>
  );
};

const StyledSidebar = styled(Sidebar)`
  border: 1px solid #888;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  h3 {
    text-align: center;
  }
  li {
    list-style: none;
    margin: 5px 0;
    font-size: 14px;
  }
  ul {
    padding: 0;
    margin: 0;
    text-align: center;
  }
  &__sns_group {
    display: flex;
    justify-content: center;
    margin: 18px 0;
    border: 1px solid #888;
    padding: 2px;
    border-radius: 8px;
  }
`;

export default StyledSidebar;