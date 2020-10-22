import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderChild from './SliderChild';
import SliderPlaceholder from './SliderPlaceholder';
import { useGlobalState } from '../../global/ContextProvider';
import Loading from '../../shared/Loading';
import settings from './sliderSettings';

const FacilitiesSlider = ({className}) => {
  const [ globalState, ] = useGlobalState();
  const placeholder = [];
  for(let i = 0; i < 4; i++) {
    placeholder.push(<SliderPlaceholder key={`ph_${i}`} />); 
  }
  return (
    <div className={className}>
      <Slider {...settings}>
        {/* resolve後にデータを表示 */}
        {
          globalState.pickedUpFacilitiesId.resolved &&
          globalState.pickedUpFacilitiesId.data.map((id, i) => {
            const facility = globalState.facilities.data[id];
            return (
              <SliderChild
                key={`fs_${i}`}
                linkPath={`/facilities/${id}`}
                imgUrl={facility && facility.header_image_url}
                title={facility && facility.name}
                body={facility && facility.description}
              />
            );
          })
        }

        {/* placeholder */}
        { globalState.pickedUpFacilitiesId.resolved || placeholder }
      </Slider>
      <h2 className={`${className}__pickup_text`}>Pickup!</h2>
      <Loading resolved={globalState.pickedUpFacilitiesId.resolved} />
    </div>
  );
};

FacilitiesSlider.propTypes = {
  className: PropTypes.string
};

const StyledSlider = styled(FacilitiesSlider)`
  position: relative;
  border-top: 20px solid #555;
  border-bottom: 20px solid #555;
  height: 260px;
  background: #ccc;
  overflow: hidden;
  &__pickup_text {
    position:absolute;
    font-size: 20px;
    margin: 0;
    top: -1px;
    left: 0;
    background: #555;
    color: #fff;
    padding: 0 50px 5px 50px;
    border-bottom: 5px solid #777;
    border-bottom-right-radius: 20px;
  }
`;

export default StyledSlider;