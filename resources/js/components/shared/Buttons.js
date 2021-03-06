import styled from 'styled-components';

const Basic = styled.button`
  padding: 6px 17px;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;

export const LoginButton = styled(Basic)`
  color: #fff;
  background: #666;
  padding: 3px 15px;
  margin: 1px;
  border-left: 3px solid #bbb;
  border-right: 3px solid #bbb;
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  transition: .3s;
  &:hover {
    background: #888;
    color: #fff;
    border-color: #fff;
  }
`;

export const ButtonWhite = styled(Basic)`
  color: #000;
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 10px;
  &:hover {
    background: #ddd;
    border-color: #bbb;
  }
`

export const ButtonWhiteDisabled = styled(Basic)`
  color: #999;
  background: #ddd;
  border: 3px solid #ccc;
  border-radius: 10px;
  border-color: #bbb;
  cursor: default;
`

export default Basic;