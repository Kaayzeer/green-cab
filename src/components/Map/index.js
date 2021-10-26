import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
import styled from "styled-components";
import { AiOutlineCar } from "react-icons/ai";
import { cars } from "../../data";

const MapContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;
`;

function Index({ fromInput, toInput }) {
  const [center, setCenter] = useState({});
  const [position, setPosition] = useState(center); //fetch urlPlaces för att få fromInput coords och sen setPosition(coords som)
  const [destination, setDestination] = useState(/*coords till toInput*/); //fetch urlPlaces för att få toInput coords och sen setDestination(coords)

  // const [chooseInput, setChooseInput] = useState(); // särkiljer mellan from och to koordinaterna

  const fetchType = {};

  // function fetchData(url, setState) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setState(data));

  // if (urlPlaces.places == fromInput) {
  //   setChooseInput(fromInput);
  // } else setChooseInput(toInput);
  // }

  /*  `https://api.mapbox.com/geocoding/v5/mapbox.places/${position}.json?country=se&proximity=-73.990593%2C40.740121&language=sv&autocomplete=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` */
  /* `https://api.mapbox.com/geocoding/v5/mapbox.places/${position}.json?limit=5&autocomplete=true&fuzzyMatch=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` */

  const urlPosition = `https://api.mapbox.com/geocoding/v5/mapbox.places/${fromInput}.json?limit=5&autocomplete=true&fuzzyMatch=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
  const urlDestination = `https://api.mapbox.com/geocoding/v5/mapbox.places/${toInput}.json?limit=5&autocomplete=true&fuzzyMatch=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  const urlRoute = `https://api.mapbox.com/directions/v5/mapbox/driving/${position};${destination}?geometries=geojson&access_token=pk.eyJ1IjoiZG9tY29iYiIsImEiOiJja3Vwd2JrYWIwYzFnMnZxdjA3eTQxaTJxIn0.OIBLSPYrEf16vRPjVV_e4A`;

  // useEffect(() => {
  //   if (fromInput >= 3) fetchData(urlPosition, setPosition);
  //   fetchData(urlPosition, setDestination);
  // }, [fromInput, toInput]);

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
          onGeolocate={(pos) =>
            setCenter({ lat: pos.coords.latitude, lon: pos.coords.longitude })
          }
        />

        <FullscreenControl style={fullscreenControlStyle} />
      </ReactMapGL>
    </MapContainer>
  );
}

export default Index;
