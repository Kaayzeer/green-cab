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

function Index() {
  const [center, setCenter] = useState({});
  const [position, setPosition] = useState();
  const [destination, setDestination] = useState(null);

  console.log(center);
  console.log("position:", position);

  /*  `https://api.mapbox.com/geocoding/v5/mapbox.places/${position}.json?country=se&proximity=-73.990593%2C40.740121&language=sv&autocomplete=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` */

  /* `https://api.mapbox.com/geocoding/v5/mapbox.places/${position}.json?limit=5&autocomplete=true&fuzzyMatch=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` */

  const urlPlaces = `https://api.mapbox.com/geocoding/v5/mapbox.places/${position}.json?limit=5&autocomplete=true&fuzzyMatch=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  const url =
    "https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiZG9tY29iYiIsImEiOiJja3Vwd2JrYWIwYzFnMnZxdjA3eTQxaTJxIn0.OIBLSPYrEf16vRPjVV_e4A";

  useEffect(() => {
    fetch(urlPlaces)
      .then((response) => response.json())
      .then((data) => setPosition(data));
  }, []);

  let [viewport, setViewport] = useState({
    longitude: 18.01953943483295,
    latitude: 59.52077559363087,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
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
    <MapContainer setPosition={setPosition} setDestination={setDestination}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle={"mapbox://styles/domcobb/ckuqmsu8c5gku17o78a6gnmiq"}
        width="100vw"
        height="35vh"
      >
        {cars.map((car, i) => (
          <Marker
            key={i}
            latitude={car.pos.latitude}
            longitude={car.pos.longitude}
            /* offsetLeft={-20} */ offsetTop={-10}
          >
            <AiOutlineCar style={style} />
          </Marker>
        ))}

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
