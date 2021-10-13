import React/* , {useState} */ from 'react'
/* import ReactMapGL, {Marker} from 'react-map-gl'; */
import styled from 'styled-components';

const MapContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;
    
` 

function Index() {



    /* let [viewport, setViewport] = useState({
        longitude: -122.45,
        latitude: 37.78,
        zoom: 14,
        width: window.innerWidth,
        height: window.innerHeight,
        pitch: 50,

    }) */

    return (
        <MapContainer>
          {/*   <ReactMapGL 
            mapStyle={'mapbox://styles/mapbox/dark-v9'}
            mapboxApiAccessToken='pk.eyJ1IjoicGFsbGFyZSIsImEiOiJja3VqaGpveXIwanl3MndvNnZhMWVsb3RhIn0.EN5fI8_JMTT0cESKHuMUiA'
            {...viewport} 
            width="100vw" 
            height="30vh" 
            onViewportChange={(newView) => setViewport(newView)} />
            <ReactMapGL/> */}
        </MapContainer>
      );
    }

export default Index
