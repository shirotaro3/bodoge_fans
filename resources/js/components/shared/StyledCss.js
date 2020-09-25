import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const mixinDivLink = css`
  position: relative;
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  };
`;

export const mixinIsShownTablet = css`
visibility: hidden;
  ${media.greaterThan('medium')`
    /* screen width is greater than 1170px */
    visibility: visible;
  `}
`