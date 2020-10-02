import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderChild from '../../shared/SliderChild';
import { useGlobalState } from '../../global/ContextProvider';
import Loading from '../../shared/Loading';

const FacilitiesSlider = ({className}) => {
  const [ globalState, dispatch ] = useGlobalState();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
  const placeholder = [];
  for(let i = 0; i < 3; i++) {
    placeholder.push(<SliderChild key={`ph_${i}`} />); 
  };
  return (
    <div className={className}>
      <Slider {...settings}>
        {
          globalState.facilityPickup.resolved &&
          globalState.facilityPickup.data.map((v, i) => {
            return (
              <SliderChild key={`fs_${i}`} height='250px'>
                {v.description}
              </SliderChild>
            )
          })
        }
        { globalState.facilityPickup.resolved || placeholder.map(v => {return v}) }
      </Slider>
      <span className={`${className}__child`}>ピックアップ</span>
      <Loading resolved={globalState.facilityPickup.resolved} />
    </div>
  );
};

const StyledSlider = styled(FacilitiesSlider)`
  position: relative;
  border-top: 5px solid #555;
  border-bottom: 5px solid #555;
  height: 260px;
  background: #fff;
  &__child {
    position:absolute;
    top: 0;
    left: 0;
    background: #555;
    color: #fff;
    padding: 3px 30px 0 30px;
    border-bottom: 5px solid #777;
    border-bottom-right-radius: 10px;
  }
`;

export default StyledSlider;