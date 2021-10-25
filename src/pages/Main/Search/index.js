import React, { useState } from "react";
import styled from "styled-components";
import CarButton from "../../../components/CenterButton";
import Map from "../../../components/Map";
import RadioGroup from "../../../components/RadioGroupSearch";

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35%;
  margin-bottom: 1rem;

  > input {
    display: inline;
    width: 15rem;
    padding: 1.4rem;
    margin-top: 2rem;
    border: none;
    outline: none;
    border-radius: 1rem;
  }

  > p {
    margin: 2rem;
    font-family: "roboto";
  }
`;

function Index(props) {
  const { position, destination } = props;

  const [fromInput, setFromInput] = useState(/* position */);
  const [toInput, setToInput] = useState(/* destination */);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const radioButtons = [
    { name: "Åka nu", value: "goNow", default: true },
    { name: "Avgång", value: "departure" },
    { name: "Ankomst", value: "arrival" },
  ];

  return (
    <>
      <SearchContainer>
        <input type="text" placeholder="Från" onChange={handleChange} />
        <input type="text" placeholder="Till" />
      </SearchContainer>

      <RadioGroup options={radioButtons} />

      <Map setFromInput={setFromInput} setToInput={setToInput} />
      <CarButton label="Välj bil" />
    </>
  );
}

export default Index;
