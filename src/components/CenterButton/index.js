import React from "react";
import styled from "styled-components";
import { devices } from "../breakpoints";

const CarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2%;

  > button {
    margin-top: 10px;
    width: 216px;
    height: 45px;
    border-radius: 35px;
    letter-spacing: 1px;
    font-size: 1rem;
    border: 1px solid ${(props) => props.theme.boxShadow};
    box-shadow: 1px 5px 2px -3px ${(props) => props.theme.boxShadow};

    @media ${devices.mobileS} {
      width: 150px;
      height: 35px;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
    }

    @media ${devices.mobileM} {
      width: 180px;
      height: 40px;
      font-size: 0.9rem;
      letter-spacing: 1.5px;
    }

    @media ${devices.tablet} {
      width: 300px;
      height: 60px;
      font-size: 1.4rem;
      letter-spacing: 1.5px;
      margin-top: 3%;
    }
    @media ${devices.laptop} {
      width: 400px;
      height: 70px;
      font-size: 1.4rem;
      letter-spacing: 1.5px;
      margin-top: 3%;
      font-weight: bold;
    }
  }
`;

function Index(props) {
  return (
    <CarButtonContainer>
      <button>{props.label}</button>
    </CarButtonContainer>
  );
}

export default Index;
