import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../global/ContextProvider';

const TimeTable = ({className, facilityId}) => {
  const [globalState, dispatch] = useGlobalState();
  const facility = globalState.facilities.data[facilityId];
  const {
    mon_start: monStart, mon_end: monEnd,
    tue_start: tueStart, tue_end: tueEnd, wed_start: wedStart,
    wed_start: wedEnd, thu_start: thuStart, thu_end: thuEnd,
    fri_start: friStart, fri_end: friEnd, sat_start: satStart,
    sat_end: satEnd, sun_start: sunStart, sun_end: sunEnd, 
    footnote
  } = facility.facility_time;
  const { phone_number : phoneNumber, address,
    m_prefecture: prefecture, building
  } = facility;
  return (
    <div className={className}>
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
        <li className={`${className}__li`}>{sunStart || '-'}</li>
        <li className={`${className}__li`}>{monStart || '-'}</li>
        <li className={`${className}__li`}>{tueStart || '-'}</li>
        <li className={`${className}__li`}>{wedStart || '-'}</li>
        <li className={`${className}__li`}>{thuStart || '-'}</li>
        <li className={`${className}__li`}>{friStart || '-'}</li>
        <li className={`${className}__li`}>{satStart || '-'}</li>

        {/* endTime */}
        <li className={`${className}__li`}>{sunEnd || '-'}</li>
        <li className={`${className}__li`}>{monEnd || '-'}</li>
        <li className={`${className}__li`}>{tueEnd || '-'}</li>
        <li className={`${className}__li`}>{wedEnd || '-'}</li>
        <li className={`${className}__li`}>{thuEnd || '-'}</li>
        <li className={`${className}__li`}>{friEnd || '-'}</li>
        <li className={`${className}__li`}>{satEnd || '-'}</li>

        {/* footnote */}
        {footnote &&
          <li className={`${className}__footnote`}>{footnote}</li>
        }
        {/* phoneNumber */}
        <li className={`${className}__tel`}>
          {`${prefecture.name}${address}${building}`}<br />
          {phoneNumber && `TEL:${phoneNumber}`}
        </li>
      </ul>
    </div>
  );
};

const StyledTimeTable = styled(TimeTable)`
  width: 40%;
  color: #fff;
  opacity: .9;
  padding-top: 40px;
  &__ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
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
`;

export default StyledTimeTable;