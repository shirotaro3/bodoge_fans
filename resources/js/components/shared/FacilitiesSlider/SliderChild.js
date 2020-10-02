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
  font-size: 14px;
  &__child {
    position: absolute;
    top: 140px;
    width: 100%;
    height: 80px;
    text-align: center;
    background: rgba(0,0,0,.5);
    color: #fff;
    padding: 10px 30px;
  }
  &__title {
    font-weight: bold;
    font-size: 16px;
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