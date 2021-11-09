import React from "react";
import { Link, useHistory } from "react-router-dom";
import landingImage from "../../../Images/greencablogo.png";
import CenterButton from "../../../components/CenterButton";
import styled from "styled-components";
import { devices } from "../../../components/breakpoints";

const LandingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 50vh;

  > p {
    padding: 1.6rem;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 1.3rem;
    }
  }

  > button {
    margin-top: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 20vh;
`;
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
      <LandingStyle>
        <img src={landingImage} alt="landing-car" />

        <PContainer>
          <p>Nu kan du boka en grön taxi och få 10% rabatt på din resa.</p>

          <ButtonContainer>
            <NavLink to="/search">
              <CenterButton
                label="Sök resa"
                onClick={() => history.push("/search")}
              />
            </NavLink>
          </ButtonContainer>
        </PContainer>
      </LandingStyle>
    </>
  );
}

export default Index;
