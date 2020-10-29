import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { BsPencilSquare } from 'react-icons/bs';
import { useGlobalState } from '../../../global/ContextProvider';
import { formatTime } from '../../../shared/utilities';
import Edit from './Edit';

const TimeTable = ({className, facilityId}) => {
  const [globalState, ] = useGlobalState();
  const [isEditing, setIsEditing] = useState(false);
  const facility = globalState.facilities.data[facilityId];
  const sessionUserId = globalState.auth.user.id;
  const isMine = facility.user_id === sessionUserId;
  const {
    mon_start: monStart, mon_end: monEnd,
    tue_start: tueStart, tue_end: tueEnd, wed_start: wedStart,
    wed_end: wedEnd, thu_start: thuStart, thu_end: thuEnd,
    fri_start: friStart, fri_end: friEnd, sat_start: satStart,
    sat_end: satEnd, sun_start: sunStart, sun_end: sunEnd, 
    footnote
  } = facility.facility_time;
  const { phone_number : phoneNumber, address,
    m_prefecture: prefecture, building, hp_url
  } = facility;
  const handleClick = () => {
    if (isMine) {
      setIsEditing(!isEditing);
    }
  };
  if (isEditing) {
    return <Edit facilityId={facilityId} cancel={handleClick} />;
  }
  return (
    <div className={className} onClick={handleClick}>
      <ul className={`${className}__ul`}>
        <li className={`${className}__headline`}>営業時間（Open/Close）</li>

        {/* 曜日行 */}
        <li className={`${className}__li ${className}__sun`}>Sun</li>
        <li className={`${className}__li`}>Mon</li>
        <li className={`${className}__li`}>Tue</li>
        <li className={`${className}__li`}>Wed</li>
        <li className={`${className}__li`}>Thu</li>
        <li className={`${className}__li`}>Fri</li>
        <li className={`${className}__li ${className}__sat`}>Sat</li>

        {/* startTime */}
        <li className={`${className}__li`}>{sunStart ? formatTime(sunStart) : '-'}</li>
        <li className={`${className}__li`}>{monStart ? formatTime(monStart) : '-'}</li>
        <li className={`${className}__li`}>{tueStart ? formatTime(tueStart) : '-'}</li>
        <li className={`${className}__li`}>{wedStart ? formatTime(wedStart) : '-'}</li>
        <li className={`${className}__li`}>{thuStart ? formatTime(thuStart) : '-'}</li>
        <li className={`${className}__li`}>{friStart ? formatTime(friStart) : '-'}</li>
        <li className={`${className}__li`}>{satStart ? formatTime(satStart) : '-'}</li>

        {/* endTime */}
        <li className={`${className}__li`}>{sunEnd ? formatTime(sunEnd) : '-'}</li>
        <li className={`${className}__li`}>{monEnd ? formatTime(monEnd) : '-'}</li>
        <li className={`${className}__li`}>{tueEnd ? formatTime(tueEnd) : '-'}</li>
        <li className={`${className}__li`}>{wedEnd ? formatTime(wedEnd) : '-'}</li>
        <li className={`${className}__li`}>{thuEnd ? formatTime(thuEnd) : '-'}</li>
        <li className={`${className}__li`}>{friEnd ? formatTime(friEnd) : '-'}</li>
        <li className={`${className}__li`}>{satEnd ? formatTime(satEnd) : '-'}</li>

        {/* footnote */}
        {footnote &&
          <li className={`${className}__footnote`}>◆{footnote}</li>
        }
        {/* address, phoneNumber, hp_url */}
        <li className={`${className}__tel`}>
          {`${prefecture.name}${address}${building || ''}`}
          {phoneNumber && <><br />{`TEL:${phoneNumber}`}</>}
          {
            hp_url &&
            <>
              <br /><a href={`${hp_url}`} target="_blank" rel="noopener noreferrer">
                {hp_url}
              </a>
            </>
          }
        </li>
        <div className={`${className}__edit`}>
          <BsPencilSquare size='25px' />
        </div>
      </ul>
    </div>
  );
};

TimeTable.propTypes = {
  className: PropTypes.string,
  facilityId: PropTypes.number
};

const StyledTimeTable = styled(TimeTable).attrs(props => {
  const [globalState, ] = useGlobalState();
  const facility = globalState.facilities.data[props.facilityId];
  const authUser = globalState.auth.user;
  const isMine = authUser.id === facility.user_id;
  return ({ isMine });
})`
  width: 40%;
  max-width: 500px;
  color: #fff;
  padding-top: 40px;
  margin: 0 0 0 auto;
  ${media.lessThan('medium')`
    width: 100%;
    max-width: 400px;
  `}
  ${media.lessThan('small')`
    max-width: 100%;
    margin: 0;
  `}
  &__ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    position: relative;
  }
  &__headline {
    width: calc(91% + 12px);
    padding: 2px 5px;
    border-radius: 8px 8px 0 0;
    border: 1px solid #fff;
    list-style: none;
    box-sizing: border-box;
    margin: 1px 1px 3px 1px;
    background: rgba(0,0,0,.3);
  }
  &__footnote {
    width: calc(91% + 12px);
    padding: 6px 5px;
    border: 1px solid #fff;
    list-style: none;
    box-sizing: border-box;
    margin: 3px 1px 1px 1px;
    background: rgba(0,0,0,.3);
    font-size: 12px;
  }
  &__tel {
    width: calc(91% + 12px);
    padding: 6px 5px;
    border-radius: 0 0 8px 8px;
    border: 1px solid #fff;
    list-style: none;
    box-sizing: border-box;
    margin: 3px 1px 1px 1px;
    background: rgba(0,0,0,.3);
    font-size: 12px;
  }
  &__li {
    font-size: 13px;
    width: 13%;
    padding: 4px 3px;
    border: 1px solid #fff;
    list-style: none;
    box-sizing: border-box;
    margin: 1px;
    background: rgba(0,0,0,.3);
  }
  &__sun {
    color: #f99;
  }
  &__sat {
    color: #99f;
  }
  &__bold {
    font-weight: bold;
  }
  &__edit {
    position: absolute;
    opacity: 0;
    top: 10px;
    right: 10px;
  }
  ${
  props => props.isMine &&
    `&__ul {
      cursor: pointer;
      &:hover {
        background: rgba(255,255,255,.1);
      }
    }
    &__ul:hover &__edit {
      opacity: .8;
    }`
}
  ${
  props => props.isMine &&
      media.lessThan('medium')`
        &__ul {
          background: rgba(255,255,255,.1);
          width: 100%;
        }
        &__edit {
          opacity: .8;
        }
      `
}
`;

export default StyledTimeTable;