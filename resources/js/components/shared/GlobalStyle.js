import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ddd;
  }
  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset;
  }
`;

export default GlobalStyle;