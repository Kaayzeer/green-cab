import React from "react";
import { Link, useHistory } from "react-router-dom";
import { SliderData } from "../../../components/SliderData";
import styled from "styled-components";
import Slider from "../../../components/Slider";
import ChartButton from "../../../components/CenterButton";

const NavLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;

function Index() {
  const history = useHistory();
  return (
    <>
      <Slider slides={SliderData} />
      <NavLink to="/chart">
        <ChartButton
          label="Till varukorgen"
          onClick={() => history.push("/chart")}
        />
      </NavLink>
    </>
  );
}

export default Index;
