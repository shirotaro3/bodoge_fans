import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderChild from '../../shared/SliderChild';

const FacilitiesSlider = ({className}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <div className={className}>
      <Slider {...settings}>
        <SliderChild>
          横浜の店
        </SliderChild>
        <SliderChild>
          横浜の店
        </SliderChild>
        <SliderChild>
          横浜の店
        </SliderChild>
      </Slider>
      <span className={`${className}__child`}>ピックアップ</span>
    </div>
  );
};

const StyledSlider = styled(FacilitiesSlider)`
  position: relative;
  &__child {
    position:absolute;
    top: 0;
    left: 0;
    background: #666;
    color: #fff;
    padding: 3px 30px 0 30px;
    border-bottom: 5px solid #888;
    border-bottom-right-radius: 10px;
  }
`;

export default StyledSlider;