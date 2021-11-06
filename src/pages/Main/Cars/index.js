import React from "react";
import { SliderData } from "../../../components/SliderData";
import styled from "styled-components";
import Slider from "../../../components/Slider";
import CenterButton from "../../../components/CenterButton";

const CarsContainer = styled.div`
  height: 80%;
`;

function Index() {
  return (
    <>
      <Slider slides={SliderData} />
    </>
  );
}

export default Index;
