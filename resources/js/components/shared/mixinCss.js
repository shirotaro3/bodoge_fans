import { css } from 'styled-components';
import media from 'styled-media-query';

// @huge: '1440px'
// @large: '1170px'
// @medium: '768px'
// @small: '450px'

export const divLink = css`
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

export const isHiddenTablet = css`
  ${media.lessThan('medium')`
    display: none;
  `}
`

export const isHiddenMobile = css`
  ${media.lessThan('small')`
    display: none;
  `}
`