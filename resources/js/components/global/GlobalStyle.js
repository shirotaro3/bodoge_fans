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
`;

export default GlobalStyle;