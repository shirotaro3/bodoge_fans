import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { useGlobalState } from '../../global/ContextProvider';

const apiKey = process.env.MIX_GOOGLEMAP_API_KEY;

const GoogleMap = ({address, markerName}) => {
  const [geocode, setGeocode] = useState({lat: 10, lng: 10});
  const [globalState, dispatch] = useGlobalState();
  const defaultCenter = {
    lat: 50,
    lng: 50
  }

  const initGeocoder = ({ maps }) => {
    const Geocoder = new maps.Geocoder();
    Geocoder.geocode({
      address: address,
      language: 'ja',
      region: 'jp'
    }, async (result, status) => {
      if (status === 'OK' && result[0]) {
        const location = result[0].geometry.location;
        setGeocode({
          lat: location.lat(),
          lng: location.lng()
        });
      } else {
        console.log('error' + status);
        dispatch({type: 'ALERT', text: '位置情報の読み込みに失敗しました。'})
      }
    });
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultCenter}
        center={geocode}
        defaultZoom={16}
        onGoogleApiLoaded={initGeocoder}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <Marker
          lat={geocode.lat}
          lng={geocode.lng}
          name={markerName}
          address={address}
        />
      </GoogleMapReact>
    </div>
  );
}


const MarkerBase = ({ name, address, className }) => {
  return (
    <div className={className}>
      <div className={`${className}__text`}>{name}</div>
      <div className={`${className}__icon`}> </div>
      <div className={`${className}__info`}>◆{name}<br />{address}</div>
    </div>
  );
};
const Marker = styled(MarkerBase)`
  text-align: left;
  position: relative;
  &__text {
    position: absolute;
    top: 20px;
    width: 100px;
  }
  &__icon {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 6px solid #f00;
    background: #fff;
    top: 0;
    left: 0;
    border-radius: 50%;
  };
  &__info {
    position: absolute;
    top: 40px;
    width: 150px;
    background: #fff;
    border: 1px solid #888;
    border-radius: 10px;
    padding: 10px;
  }
`;

export default GoogleMap;