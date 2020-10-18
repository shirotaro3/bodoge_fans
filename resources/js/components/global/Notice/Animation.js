import styled from 'styled-components';

const Animation = styled.div`
  transition: .8s;
  background: #333;
  color: ${({color}) => {return color}};
  font-size: 13px;
  font-weight: bold;
  border-radius: 20px;
  padding: 53px 20px 7px 20px;
  transform: ${({state}) => {
    switch (state) {
      case 'entering':
          return 'translateY(0)'
      case 'entered':
          return 'translateY(32px)'
      case 'exiting':
          return 'translateY(32px)'
      case 'exited':
          return 'translateY(0)'
    }
  }};
`;

export default Animation;