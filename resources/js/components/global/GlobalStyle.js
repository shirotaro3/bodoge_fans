import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { fade } from '../shared/keyframes';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ccc;
    ${media.lessThan('medium')`
      font-size: 14px;
    `}
  }
  input:-webkit-autofill {
    /* オートコンプリートから入力時、色がつかないようにする */
    box-shadow: 0 0 0px 1000px #fff inset;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
    margin: 10px 0;
  }
  #result-top {
    /* ヘッダー固定によるページ内リンクのズレを防止する */
    ${media.lessThan('small')`
      margin-top: -58px;
      padding-top: 58px;
    `}
  }
  .fadein {
    animation: ${fade} .7s 1;
  }
  .text-center {
    text-align: center;
  }
  /* override */
  .react-datepicker__input-container input {
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
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    display: block;
    width: 100%;
  }
`;

export default GlobalStyle;