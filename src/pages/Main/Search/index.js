import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import CarButton from "../../../components/CenterButton";
import Map from "../../../components/Map";
import RadioGroup from "../../../components/RadioGroupSearch";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35%;
  position: relative;

  > input {
    flex: 0.1;

    position: relative;
    display: inline;
    width: 15rem;
    padding: 1.4rem;
    margin-top: 2rem;
    border: none;
    outline: none;
    border-radius: 1rem;
  }
  ul {
    flex: 0.1;
    position: absolute;
    z-index: 99;
    top: 50%;
    margin: auto;
    height: auto;
    width: 240px;
    background: white;
    border: 1px solid black;
    z-index: 1;
    list-style: none;
  }
  #to-ul {
    flex: 0.1;
    position: absolute;
    z-index: 99;
    top: 50%;
    margin: auto;
    height: auto;
    width: 240px;
    background: white;
    border: 1px solid black;
    z-index: 1;
    list-style: none;
  }

  /* > p {
    margin: 2rem;
    font-family: "roboto";
  } */
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;

function Index() {
  const history = useHistory();
  const [apiQueryToFromInput, setApiQueryToFromInput] = useState([]); // Array fetched from api by the "from input-field"
  const [apiQueryToToInput, setApiQueryToToInput] = useState([]); // Array fetched from api by the "to input-field"
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [geometryFrom, setGeometryFrom] = useState(null);
  const [geometryTo, setGeometryTo] = useState(null);
  const [addressAndCoordinates, setAddressAndCoordinates] = useState([]); // Destructuring values from fetch as you like it
  const [currentFrom, setCurrentFrom] = useState({}); // To save the selected option
  const [currentTo, setCurrentTo] = useState({}); // To save the selected option
  const [uiFromIsHidden, setUiFromIsHidden] = useState(true); // this is to hide/Show the UL when typing and clicking
  const [uiToIsHidden, setUiToIsHidden] = useState(true); // this is to hide/Show the UL when typing and clicking
  const test = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    place: fromInput,
    autocomplete: true,
  });

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.id) {
      case "from":
        setUiFromIsHidden(false);
        setFromInput(e.target.value);
        break;
      case "to":
        setUiToIsHidden(false);
        setToInput(e.target.value);
      default:
        break;
    }
    if (e.target.id == "from") {
    } else {
    }
  };

  const radioButtons = [
    { name: "Åka nu", value: "goNow", default: true },
    { name: "Avgång", value: "departure" },
    { name: "Ankomst", value: "arrival" },
  ];

  useEffect(() => {
    (fromInput.length > 0) | (fromInput !== "") &&
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${fromInput}.json?country=se&language=sv&autocomplete=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      )
        .then((res) => res.json())
        .then((data) => {
          setApiQueryToFromInput(data.features);
        });
  }, [fromInput]);

  useEffect(() => {
    (toInput.length > 0) | (toInput !== "") &&
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${toInput}.json?country=se&language=sv&autocomplete=true&routing=true&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      )
        .then((res) => res.json())
        .then((data) => {
          setApiQueryToToInput(data.features);
        });
  }, [toInput]);

  return (
    <>
      <SearchContainer>
        <input
          type="text"
          placeholder="Från"
          id="from"
          onChange={handleChange}
        />
        {apiQueryToFromInput.length > 1 && (
          <ul style={{ display: `${uiFromIsHidden ? "none" : ""}` }}>
            {apiQueryToFromInput.map(
              ({
                text: name,
                id,
                geometry: {
                  coordinates: { [0]: lat, [1]: long },
                },
              }) => (
                <li
                  key={id}
                  id={id}
                  value={name}
                  onClick={() => {
                    setCurrentFrom({ name, id, lat, long });
                    setUiFromIsHidden(true);
                  }}
                >
                  {name}
                </li>
              )
            )}
          </ul>
        )}
        <input type="text" placeholder="Till" id="to" onChange={handleChange} />
        {apiQueryToToInput.length > 1 && (
          <ul style={{ display: `${uiToIsHidden ? "none" : ""}` }}>
            {apiQueryToToInput.map(
              ({
                text: name,
                id,
                geometry: {
                  coordinates: { [0]: lat, [1]: long },
                },
              }) => (
                <li
                  key={id}
                  id={id}
                  value={name}
                  onClick={() => {
                    setCurrentTo({ name, id, lat, long });
                    setUiToIsHidden(true);
                  }}
                >
                  {name}
                </li>
              )
            )}
          </ul>
        )}
      </SearchContainer>
      <RadioGroup options={radioButtons} />

      <Map fromInput={fromInput} toInput={toInput} />
      <NavLink to="/cars">
        <CarButton label="Välj bil" onClick={() => history.push("/cars")} />
      </NavLink>
    </>
  );
}

export default Index;
