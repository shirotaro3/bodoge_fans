import styled from 'styled-components';

const UserIcon = styled.div.attrs(props => ({
  bgImage: props.iconUrl ? `url(${props.iconUrl})` : 'url(/img/usericon.jpeg)',
  size: props.size || '40px',
}))`
  height: ${props => props.size};
  width: ${props => props.size};
  background: #bbb;
  background-image:  ${props => props.bgImage};
  background-size: cover;
  border-radius: 50%;
`;

export default UserIcon;