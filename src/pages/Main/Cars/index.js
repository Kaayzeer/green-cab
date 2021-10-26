import React from "react";
import styled from "styled-components";
import standard from "../../../Images/standardChoiceCar.png";
import xl from "../../../Images/XLchoiceCar.png";
import gold from "../../../Images/goldChoiceCar.png";

const CarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

function Index() {
  const cars = [
    {
      price: "200 kr",
      type: "standard",
      pic: standard,
      capacity: "4",
    },
    {
      price: "300 kr",
      type: "XL",
      pic: xl,
      capacity: "7",
    },
    {
      price: "400 kr",
      type: "Guld",
      pic: gold,
      capacity: "5",
    },
  ];

  /*  const style = { width: "150px", height: "100px" }; */

  return (
    <CarsContainer>
      {cars.map((car, i) => (
        <>
          <h3 key={i}>{car.type}</h3>
          <img src={car.pic} alt="carPic" /* style={style} */ />
          <p>{car.capacity}</p>
          <p>{car.price}</p>
        </>
      ))}
    </CarsContainer>
  );
}

export default Index;
