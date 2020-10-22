import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AutosizeTextarea from 'react-autosize-textarea';
import ReactSelect from 'react-select';
import DatePicker from 'react-datepicker';

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export const FormVertical = styled.form`
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  input, button, label, span, textarea, a {
    display: block;
    margin-bottom: 20px;
  }
  button {
    margin: 0 auto 20px auto;
  }
  label {
    margin: 0;
    padding: 0;
    text-align: left;
  }
  span {
    margin: -20px 0 20px 0;
    color: #f77;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border: 4px solid #fff;
  border-radius: 10px;
  background: #fff;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
  }
  &:focus {
    background: #eee;
    border-color: #ddd;
    cursor: text;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  button, a {
    margin: 0 10px 20px 10px;
  }
`;

export const Radio = styled(Container)`
  height: 50px;
  flex-direction: column;
  background: #666;
  padding: 0;
  margin-right: 4px;
  margin-bottom: 0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  &:hover {
    background: #777;
  }
  input[type='radio'] {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    position: absolute;
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    &:checked {
      cursor: default;
    }
  }
  label {
    display: block;
    padding: 15px 17px;
  }
  input:checked + label {
    background: #999;
  }
`;

export const Textarea = styled(AutosizeTextarea)`
  width: 100%;
  min-height: 40px;
  padding: 5px 2px;
  font-size: 15px;
  border: 4px solid #fff;
  border-radius: 10px;
  background: #fff;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
  }
  &:focus {
    background: #eee;
    border-color: #ddd;
    cursor: text;
  }
`;

/* eslint-disable react/prop-types */
const InputFileDiv = (props, ref) => {
  const [imgUrl, setImgUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    // エラーを初期化
    const file = e.target.files[0];
    if (!file) return;
    if (file.type != 'image/jpeg' &&
      file.type != 'image/gif' &&
      file.type != 'image/png') {
      setFileName(file.name);
      return setImgUrl('');
    }
    if (file.size > 3000000) {
      setFileName(file.name);
      return setImgUrl('');
    }
    setFileName(file.name);
    setImgUrl(createObjectURL(file));
  };

  return (
    <div className={props.className}>
      {imgUrl && <img src={imgUrl} />}
      {fileName || props.placeholder}
      <input {...props} ref={ref} type='file' onChange={handleChange} />
    </div>
  );
};
/* eslint-enable react/prop-types */

export const InputFile = styled(forwardRef(InputFileDiv))`
  position: relative;
  width: 100%;
  min-height: 40px;
  font-size: 15px;
  border: 4px solid #fff;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 20px;
  text-align: left;
  padding: 5px 2px;
  color: #555;
  cursor: pointer;
  &:hover {
    border-color: #ddd;
  }
  img {
    width: 100%;
  }
  input[type=file] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

export const Select = (props) => {
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      width: '100%',
      borderBottom: '1px dotted pink',
      color: '#555',
      textAlign: 'left',
      outline: 'none',
    }),
    control: (provided) => ({
      ...provided,
      width: '100%',
      minHeight: '40px',
      borderRadius: '10px',
      border: '4px solid #fff',
      marginBottom: '20px',
      outline: 'none',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#ddd'
      }
    }),
    input: (provided) => ({
      ...provided,
      height: '20px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      height: '0'
    })
  };
  return (
    <ReactSelect {...props}
      autoComplete='off'
      onFocus={e => e.target.readOnly = true}
      styles={customStyles}
    />
  );
};

const ProgressBase = ({className, steps, current}) => {
  return (
    <div className={className}>
      {steps.map((step, i) => {
        return <span
          className={i + 1 <= current ?
            `${className}__step_current` :
            `${className}__step`}
          key={step}
        >
          {step}
        </span>;
      })}
    </div>    
  );
};

ProgressBase.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.number,
  current: PropTypes.number
};

export const Progress = styled(ProgressBase)`
  font-size: 14px;
  width: 100%;
  margin: 0 auto 15px auto;
  padding: 6px 0;
  span {
    padding: 5px 10px;
    border-radius: 4px;
    margin: 0 4px;
  }
  &__step {
    color: #333;
    background: #fff;
  }
  &__step_current {
    color: #fff;
    background: #44f;
  }
`;

export const TimePicker = props => {
  return (
    <DatePicker
      onFocus={e => e.target.readOnly = true}
      autoComplete='off'
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="時間"
      timeFormat='HH:mm'
      dateFormat="HH:mm"
      {...props}
    />
  );
};