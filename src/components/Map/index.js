import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import styled from "styled-components";

const MapContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;

  .map {
    height: 25vh;
    width: 100%;
  }

  .mapboxgl-control-container {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .mapbox-directions-profile
    mapbox-directions-component-keyline
    mapbox-directions-clearfix {
    display: none;
  }
  #mapbox-directions-profile-driving-traffic {
    display: none;
  }

  .directions-control-instructions {
    display: none;
  }

  .mapboxgl-ctrl-attrib-inner {
    display: none;
  }
  .mapboxgl-ctrl-attrib-button {
    display: none;
  }
`;

function Index() {
  const mapRef = useRef();

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  useEffect(() => {
    let directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });

    let map = new mapboxgl.Map({
      container: mapRef.current,
      style: `mapbox://styles/domcobb/ckvjtslv5812e14nz7rs5qjgn`,
      center: [18.07925962949465, 59.29909073959004],
      zoom: 8,
      /* pitch: 50, */
    });

    map.addControl(directions, "top-left");

    map.on("click", (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["taxi-sthlm"], // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.driver}</h3><p>${feature.properties.type}</p>`
        )
        .addTo(map);
    });
  }, []);

  return (
    <MapContainer>
      <div ref={mapRef} className="map"></div>
    </MapContainer>
  );
}

export default Index;
