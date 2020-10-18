import styled, { css } from 'styled-components';
import { Link as L } from 'react-router-dom';
import { HashLink as HL } from 'react-router-hash-link';

const mixinLinkStyle = css`
  color:#444;
  &:hover {
    color: #555;
    text-decoration: underline;
  }
`;

const mixinWhiteLinkStyle = css`
  color:#eee;
  &:hover {
    color: #ddd;
    text-decoration: underline;
  }
`;

const mixinButtonWhiteStyle = css`
  padding: 6px 17px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  color: #000;
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 10px;
  &:hover {
    background: #ddd;
    border-color: #bbb;
  }
`;

export const Link = styled(L)`
  ${mixinLinkStyle}
` ;

export const HashLink = styled(HL)`
  ${mixinLinkStyle}
`;

export const LinkWhite = styled(L)`
  ${mixinWhiteLinkStyle}
`;

export const HashLinkWhite = styled(HL)`
  ${mixinWhiteLinkStyle}
`;

export const LinkButtonWhite = styled(L)`
  ${mixinButtonWhiteStyle}
`;