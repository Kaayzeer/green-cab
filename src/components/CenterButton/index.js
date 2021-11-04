import React from "react";
import styled from "styled-components";

const CarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100px; */
  margin-top: 2%;

  > button {
    margin-top: 10px;
    width: 216px;
    height: 45px;
    border-radius: 35px;
    letter-spacing: 1px;
    font-size: 1rem;
    border: none;
    /* box-shadow: 2px 2px 2px 1px #d1d4cb; */
    text-decoration: none !important;
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
