import styled from 'styled-components';
import media from 'styled-media-query';

export const BoxRoundedBlack = styled.div`
  background: #555;
  color: #fff;
  margin: 50px auto;
  padding: 30px 100px;
  max-width: 600px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  ${media.lessThan('medium')`
    padding: 30px 10%;
    max-width: 500px;
  `}
  ${media.lessThan('small')`
    margin: 30px auto;
    padding: 20px 5%;
    max-width: 95%;
  `}
`;