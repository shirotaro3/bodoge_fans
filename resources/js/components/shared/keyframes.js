import { keyframes } from 'styled-components';

export const fade = keyframes`
  from {
    opacity: .5;
  }

  to {
    opacity: 1;
  }
`;

export const emerge = keyframes`
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(10px);
  }
`;

export const fadeEmerge = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;