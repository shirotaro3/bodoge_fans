import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  width: 240px;
  height: 40px;
  font-size: 15px;
  border: 4px solid #fff;
  border-radius: 10px;
  background: #fff;
  outline: none;
  margin: 5px 0;
  &:hover {
    border-color: #ddd;
  }
  &:focus {
    background: #eee;
    border-color: #ddd;
  }
`;