import styled, { css } from 'styled-components';
import { Link as L } from 'react-router-dom';
import { HashLink as HL } from 'react-router-hash-link';

const mixinLinkStyle = css`
  color:#444;
  &:hover {
    color: #555;
    text-decoration: underline;
  }
`

const mixinWhiteLinkStyle = css`
  color:#eee;
  &:hover {
    color: #ddd;
    text-decoration: underline;
  }
`

export const Link = styled(L)`
  ${mixinLinkStyle}
` 

export const HashLink = styled(HL)`
  ${mixinLinkStyle}
`

export const LinkWhite = styled(L)`
  ${mixinWhiteLinkStyle}
`

export const HashLinkWhite = styled(HL)`
  ${mixinWhiteLinkStyle}
`