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
  height: 30%;

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

  const radioButtons = [
    { name: "Åka nu", value: "goNow", default: true },
    { name: "Avgång", value: "departure" },
    { name: "Ankomst", value: "arrival" },
  ];

  return (
    <>
      <SearchContainer></SearchContainer>

      <RadioGroup options={radioButtons} />

      <Map />

      <NavLink to="/cars">
        <CarButton label="Välj bil" onClick={() => history.push("/cars")} />
      </NavLink>
    </>
  );
}

export default Index;
