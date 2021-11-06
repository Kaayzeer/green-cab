import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../../../Images/chartBackground.png";
import BookingButton from "../../../components/CenterButton";
import goldChoiceCar from "../../../Images/goldChoiceWBack.png";

const StyledChart = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  .chart {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid ${(props) => props.theme.body};
    border-radius: 16px;
    list-style-type: none;
    z-index: 100;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(9px);
    padding: 2.4rem;
  }

  ul {
    list-style-type: none;
    font-weight: bold;
    margin: 0rem 0rem;
  }
`;

const NavLink = styled(Link)`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;

function Index() {
  const history = useHistory();

  const chartInfo = [
    "Extra:",
    "1 Bilbarnstol, husddjur",
    "Rabatt 10%",
    "Totalt: 360 kr",
  ];

  return (
    <StyledChart>
      <div className="chart">
        <h3>Du har valt guldpaketet!</h3>
        <img src={goldChoiceCar} alt="chartPic" />
        {chartInfo.map((info, i) => (
          <ul key={i}>
            <li>{info}</li>
          </ul>
        ))}
      </div>
      <NavLink to="/chart">
        <BookingButton
          label="Bekräfta bokning"
          onClick={() => history.push("/booking")}
        />
      </NavLink>
    </StyledChart>
  );
}

export default Index;
