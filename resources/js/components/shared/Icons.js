import styled from 'styled-components';

export const IconRounded = styled.div.attrs(props => ({
  bgImage: `url(${props.iconUrl})` || 'none',
  size: props.size || '40px',
}))`
  height: ${props => props.size};
  width: ${props => props.size};
  background-image: ${props => props.bgImage};
  background-size: cover;
  border-radius: 50%;
`;