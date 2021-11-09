import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import CarButton from "../../../components/CenterButton";
import Map from "../../../components/Map";
import RadioGroup from "../../../components/RadioGroupSearch";
import { devices } from "../../../components/breakpoints";

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;

  @media ${devices.mobileS} {
    height: 30%;
  }

  @media ${devices.mobileM} {
    height: 30%;
  }

  @media ${devices.laptopL} {
    height: 25%;
  }
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
