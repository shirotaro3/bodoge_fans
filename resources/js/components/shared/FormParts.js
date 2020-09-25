import React from 'react';
import styled from 'styled-components';

export const FormVertical = styled.form`
  width: 100%;
  height: 100%;
  padding: 0 25%;
  input, button, label, p {
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
      width: 240px;
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
  width: 240px;
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