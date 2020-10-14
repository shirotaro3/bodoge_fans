import { createGlobalStyle } from 'styled-components';
import { fade } from '../shared/keyframes';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ddd;
  }
  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset;
  }
  .page {
    animation: ${fade} .7s 1;
  }
  /* override */
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

export default GlobalStyle;