import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, GeolocateControl, FullscreenControl} from 'react-map-gl';
import styled from 'styled-components';

import { AiOutlineCar } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

import {cars} from "../../data";

const MapContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;
    
 /*    .mapboxgl-ctrl-icon {
      color: 'white',
      background-image: url(${BiCurrentLocation});
}
     */
` 

function Index() {
  /* const [center, setCenter] = useState({})
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter(position.coords)
      })
    }, []) */


    let [viewport, setViewport] = useState({
      longitude: 18.01953943483295,
      latitude: 59.52077559363087,
        zoom: 8,
        width: window.innerWidth,
        height: window.innerHeight,
        pitch: 10,

    })
    
    const geolocateControlStyle= {
      right: 10,
      top: 10,
      
    };

    const fullscreenControlStyle= {
      left: 10,
      top: 10,
      color: 'white'
    };

    const style = {
      color: '#d00000',
      
    }


    const [showPopup, togglePopup] = React.useState(false);

    return (
      <MapContainer>
        
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
            onViewportChange={viewport => {setViewport(viewport)}}
            mapStyle={'mapbox://styles/domcobb/ckuqmsu8c5gku17o78a6gnmiq'}
            width='100vw'
            height='35vh'
            >
              {cars.map((car, i) => (
        <Marker key={i} latitude={car.pos.latitude} longitude={car.pos.longitude} /* offsetLeft={-20} */ offsetTop={-10}>
        <AiOutlineCar style={style} />
      </Marker>))}
              
              <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />

<FullscreenControl style={fullscreenControlStyle} />
            </ReactMapGL>
        
        </MapContainer>
      );
    }

export default Index
