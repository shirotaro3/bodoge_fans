import React from 'react';
import styled from 'styled-components';
import { mixinDivLink } from '../../shared/StyledCss';
import { Link } from '../../shared/Links';

const SliderChild = ({className, title, body, linkPath, imgUrl}) => {
  return (
    <div className={className}>
      <div className={`${className}__child`}>
        <span className={`${className}__title`}>{title}</span><br />
        <span>{body}</span>
      </div>
      {linkPath && <Link to={linkPath} className={`${className}__link`}></Link>}
    </div>
  );
};

const StyledSliderChild = styled(SliderChild).attrs(props => ({
  imgUrl: props.imgUrl || 'none'
}))`
  ${mixinDivLink}
  height: 250px;
  border-left: 5px solid #555;
  border-right: 5px solid #555;
  position: relative;
  transition: .3s;
  outline: none;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  &__child {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 70px;
    text-align: center;
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 10px 30px;
    h3 {
      font-size:15px;
      margin: 0 auto;
    }
  }
  &__title {
    font-weight: bold;
  }
  &__link {
    cursor: pointer;
    transition: .3s;
    background: rgba(255,255,255,.1);
    &:hover {
      background: rgba(255,255,255,.3);
    }
  }
`;

export default StyledSliderChild;