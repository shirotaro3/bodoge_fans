import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useForm, Controller } from 'react-hook-form';
import { setHours, setMinutes } from 'date-fns';
import { useGlobalState } from '../../../global/ContextProvider';
import { TimePicker, Input, Container } from '../../../shared/FormParts';
import { ButtonWhite as Button } from '../../../shared/Buttons';

const TimeTableEdit = ({className, facilityId, cancel}) => {
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
    m_prefecture: prefecture, building, hp_url
  } = facility;
  const { register, handleSubmit, watch, errors, control } = useForm();
  const selectedTime = (time) => {
    // react-datepickerがdatetime型しか受け付けない仕様のため。
    return time && new Date(`2020/11/11 ${time}`);
  }
  const onSubmit = handleSubmit (async (data) => {
    console.log(data);
    try {
      dispatch({type: 'API_CALL_START'});
      const response = await axios.put(`/api/facility_times/${facility.facility_time.id}`, data);
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'SET_FACILITY_TIME', data: response.data});
      dispatch({type: 'MESSAGE', text: '保存しました。'});
      cancel();
    } catch(err) {
      console.log(err);
      dispatch({type: 'API_CALL_END'});
      dispatch({type: 'ALERT', text: '処理に失敗しました。'});
    }
  });
  return (
    <div className={className}>
      <form onSubmit={onSubmit}>
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
          <li className={`${className}__li`}>
            <Controller
              name='sun_start'
              control={control}
              defaultValue={sunStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='mon_start'
              control={control}
              defaultValue={monStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='tue_start'
              control={control}
              defaultValue={tueStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='wed_start'
              control={control}
              defaultValue={wedStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='thu_start'
              control={control}
              defaultValue={thuStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='fri_start'
              control={control}
              defaultValue={friStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='sat_start'
              control={control}
              defaultValue={satStart}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>

          {/* endTime */}
          <li className={`${className}__li`}>
            <Controller
              name='sun_end'
              control={control}
              defaultValue={sunEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='mon_end'
              control={control}
              defaultValue={monEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='tue_end'
              control={control}
              defaultValue={tueEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='wed_end'
              control={control}
              defaultValue={wedEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='thu_end'
              control={control}
              defaultValue={thuEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='fri_end'
              control={control}
              defaultValue={friEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>
          <li className={`${className}__li`}>
            <Controller
              name='sat_end'
              control={control}
              defaultValue={satEnd}
              render={({ onChange, value, name }) => (
                <TimePicker
                  onChange={date => onChange(date && date.toLocaleTimeString())}
                  name={name}
                  selected={selectedTime(value)}
                  placeholderText='-'
                  isClearable
                />
              )}
            />
          </li>

          {/* footnote */}
          <li className={`${className}__footnote`}>
            <Input
              name='footnote'
              placeholder='備考[任意]'
              defaultValue={footnote}
              ref={register({
                maxLength: { value: 20, message: '20文字以内で入力してください。'}
              })}
            />
            {errors.footnote && <span>{errors.footnote.message}</span>}
          </li>
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
        </ul>
        <Container>
          <Button type='submit'>保存</Button>
          <Button type='button' onClick={cancel}>キャンセル</Button>
        </Container>
      </form>
    </div>
  );
};

const StyledTimeTableEdit = styled(TimeTableEdit)`
  width: 40%;
  color: #fff;
  padding-top: 40px;
  ${media.lessThan('medium')`
    width: 100%;
  `}
  &__ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
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

export default StyledTimeTableEdit;