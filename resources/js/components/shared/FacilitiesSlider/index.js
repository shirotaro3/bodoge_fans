import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderChild from './SliderChild';
import { useGlobalState } from '../../global/ContextProvider';
import Loading from '../../shared/Loading';
import settings from './sliderSettings';

const FacilitiesSlider = ({className}) => {
  const [ globalState, dispatch ] = useGlobalState();
  const placeholder = [];
  for(let i = 0; i < 3; i++) {
    placeholder.push(<SliderChild key={`ph_${i}`} />); 
  };
  return (
    <div className={className}>
      <Slider {...settings}>
        {/* resolve後にデータを表示 */}
        {
          globalState.pickedUpFacilitiesId.resolved &&
          globalState.pickedUpFacilitiesId.data.map((id, i) => {
            return (
              <SliderChild
                key={`fs_${i}`}
                linkPath={`/facilities/${id}`}
                imgUrl={globalState.facilities.data[id].header_image_url}
                title={globalState.facilities.data[id].name}
                body={globalState.facilities.data[id].description}
              />
            )
          })
        }

        {/* placeholder */}
        { globalState.pickedUpFacilitiesId.resolved || placeholder.map(v => {return v}) }
      </Slider>
      <h2 className={`${className}__child`}>Pickup!</h2>
      <Loading resolved={globalState.pickedUpFacilitiesId.resolved} />
    </div>
  );
};

const StyledSlider = styled(FacilitiesSlider)`
  position: relative;
  border-top: 20px solid #555;
  border-bottom: 20px solid #555;
  height: 260px;
  background: #ccc;
  overflow: hidden;
  &__child {
    position:absolute;
    font-size: 20px;
    margin: 0;
    top: 0;
    left: 0;
    background: #555;
    color: #fff;
    padding: 0 50px 5px 50px;
    border-bottom: 5px solid #777;
    border-bottom-right-radius: 20px;
  }
`;

export default StyledSlider;