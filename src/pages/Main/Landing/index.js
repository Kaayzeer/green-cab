import React from "react";
import { Link, useHistory } from "react-router-dom";
import landingImage from "../../../Images/greencablogo.png";
import CenterButton from "../../../components/CenterButton";
import styled from "styled-components";

const LandingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const UlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 50vh;

  > ul {
    padding: 0 1.4rem;

    > li {
      list-style: none;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  > p {
    padding: 1.6rem;
    text-align: center;
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

        <UlContainer>
          <p>Nu kan du boka en grön taxi och få 10% rabatt på din resa.</p>

          <ButtonContainer>
            <NavLink to="/search">
              <CenterButton
                label="Sök resa"
                onClick={() => history.push("/search")}
              />
            </NavLink>
          </ButtonContainer>
        </UlContainer>
      </LandingStyle>
    </>
  );
}

export default Index;
