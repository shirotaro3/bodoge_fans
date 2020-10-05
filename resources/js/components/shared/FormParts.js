import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import AutosizeTextarea from 'react-autosize-textarea';
import ReactSelect from 'react-select';

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export const FormVertical = styled.form`
  width: 100%;
  height: 100%;
  padding: 0 20%;
  input, button, label, p, textarea {
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
  p {
    margin: -20px 0 20px 0;
    color: #f00;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
  }
  /* override css */
  .react-datepicker-wrapper {
    input {
      width: 100%;
      height: 40px;
      font-size: 15px;
      border: 4px solid #fff;
      border-radius: 10px;
      background: #fff;
      outline: none;
      color: #000;
      cursor: pointer;
      &:hover {
        border-color: #ddd;
      }
      &:focus {
        background: #eee;
        border-color: #ddd;
        cursor: text;
      }
    }
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
  margin-bottom: 20px;
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

const InputFileDiv = forwardRef((props, ref) => {
  const [imgUrl, setImgUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const files = e.target.files;
    setFileName(files[0].name);
    setImgUrl(createObjectURL(files[0]));
  };

  return (
    <div className={props.className}>
      {imgUrl && <img src={imgUrl} />}
      {fileName || props.placeholder}
      <input {...props} ref={ref} type='file' onChange={handleChange} />
    </div>
  );
});

export const InputFile = styled(InputFileDiv)`
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
    control: (provided, state) => ({
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
  }
  return (
    <ReactSelect {...props} styles={customStyles} />
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
        </span>
      })}
    </div>    
  );
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