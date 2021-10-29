import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import styled from "styled-components";
import { AiOutlineCar } from "react-icons/ai";
import { cars } from "../../data";
import { getDynamicPosition } from "react-map-gl/src/utils/dynamic-position";

const MapContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;
`;

function Index({ fromInput, toInput, currentFrom, currentTo }) {
  const [center, setCenter] = useState({});
  const [position, setPosition] = useState(center); //fetch urlPlaces för att få fromInput coords och sen setPosition(coords som)
  const [destination, setDestination] = useState(/*coords till toInput*/); //fetch urlPlaces för att få toInput coords och sen setDestination(coords)

  console.log(`currentFrom: ${currentFrom}`, `currentTo : ${currentTo}`);

  let [viewport, setViewport] = useState({
    longitude: 18.01953943483295,
    latitude: 59.52077559363087,
    zoom: 8,
    pitch: 10,
  });

  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  const fullscreenControlStyle = {
    left: 10,
    top: 10,
    color: "white",
  };

  const style = {
    color: "#d00000",
  };

  // const [showPopup, togglePopup] = React.useState(false);

  return (
    <MapContainer>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle={"mapbox://styles/domcobb/ckuqmsu8c5gku17o78a6gnmiq"}
        width="100vw"
        height="25vh"
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
          onGeolocate={(pos) => {
            setCenter({ lat: pos.coords.latitude, lon: pos.coords.longitude });
            /* currentTo, currentFrom */
          }}
        />

        <FullscreenControl style={fullscreenControlStyle} />
      </ReactMapGL>
    </MapContainer>
  );
}

export default Index;
