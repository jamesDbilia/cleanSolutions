import React, { useState } from 'react';
import pin from '../img/location.svg';
import { places } from '../utils/placesArray';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import useWindowDimensions from '../utils/ScreenWidth';

const mapStyle = require('../utils/mapStyles.json');
function GoogleMaps() {
  const { width } = useWindowDimensions();
  const mapContainerStyle = {
    width: '100%',
    height: '40rem',
  };
  const [zoom, setZoom] = useState(0);
  const [map, setMap] = useState(0);
  const [location, setLocation] = useState(0);
  const [popup, setPopup] = useState([]);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  return (
    <>
      <LoadScript
        googleMapsApiKey='AIzaSyDliEEO1m4VGM3PjrTZETBukwLLAQhA6HQ'
        id='script-loader'
      >
        <GoogleMap
          zoom={
            location === 0 && width < 1200
              ? 10
              : location === 0 && width >= 1200 && width > 650
              ? 11
              : location === 0 && width <= 650
              ? 12
              : location !== 0 && location !== 3 && width < 1200
              ? 15
              : location !== 0 && location !== 3 && width >= 1200 && width > 650
              ? 16
              : location !== 0 && location !== 3 && width <= 650
              ? 17
              : location === 3
              ? zoom
              : zoom
          }
          onLoad={(map) => {
            setMap(map);
          }}
          center={{
            lat:
              location === 0
                ? 43.673
                : location === 1
                ? 43.6248216
                : location === 2
                ? 43.719925
                : lat,
            lng:
              location === 0
                ? -79.43752
                : location === 1
                ? -79.5546
                : location === 2
                ? -79.2905495
                : long,
          }}
          onZoomChanged={() => {
            if (map.zoom > 13 && map.zoom < 15) {
              setLocation(3);
            }
            setZoom(map.zoom);
            if (map.mapUrl !== undefined) {
              const value = map.mapUrl.split(/=|,|&/g);
              setLat(Number(value[1]));
            }
            if (map.mapUrl !== undefined) {
              const value = map.mapUrl.split(/=|,|&/g);
              setLong(Number(value[2]));
            }
          }}
          options={{
            styles: mapStyle,
            controlSize: width > 900 ? 30 : 20,
          }}
          clickable={true}
          mapContainerStyle={mapContainerStyle}
        >
          {places.map((place) => (
            <Marker
              position={{ lat: place.lat, lng: place.lng }}
              key={place.id}
              icon={{
                url: pin,
              }}
              onClick={() => {
                return popup.filter((pop) => pop === place.id).length === 1
                  ? setPopup(popup.filter((pop1) => pop1 !== place.id))
                  : setPopup([...popup, place.id]);
              }}
            >
              {popup.map(
                (pop) =>
                  pop === place.id && (
                    <InfoWindow key={pop}>
                      <div className='label'>
                        <div className='label__cover'></div>
                        <p className='label-text'>{place.title}</p>
                        <p className='label-text'>{place.addressLine1}</p>
                        <p className='label-text'>{place.addressLine2}</p>
                        {location === 0 || zoom < 13 ? (
                          <p
                            onClick={() => {
                              setPopup([]);
                              setLocation(place.id);
                            }}
                            className='label-text label-text__zoom'
                          >
                            {`[+] Zoom Here`}
                          </p>
                        ) : (
                          <p
                            className='label-text label-text__zoom'
                            onClick={() => {
                              setPopup([]);
                              setLocation(0);
                            }}
                          >
                            {`[–] Zoom Out`}
                          </p>
                        )}
                      </div>
                    </InfoWindow>
                  )
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
export default GoogleMaps;
