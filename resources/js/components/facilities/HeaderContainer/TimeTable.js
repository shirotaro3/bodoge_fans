import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../global/ContextProvider';

const TimeTable = ({className}) => {
  const [globalState, dispatch] = useGlobalState();
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
        <li className={`${className}__li`}>10:00</li>
        <li className={`${className}__li`}>12:00</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>

        {/* endTime */}
        <li className={`${className}__li`}>24:00</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>
        <li className={`${className}__li`}>cds</li>

        {/* footnote */}
        <li className={`${className}__footnote`}>祝日はお休みです。</li>
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
    background: rgba(0,0,0,.2);
  }
  &__footnote {
    width: calc(91% + 12px);
    padding: 6px 5px;
    border-radius: 0 0 8px 8px;
    border: 1px solid #fff;
    list-style: none;
    box-sizing: border-box;
    margin: 3px 1px 1px 1px;
    background: rgba(0,0,0,.2);
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
    background: rgba(0,0,0,.2);
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