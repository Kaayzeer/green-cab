import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../../../Images/chartBackground.png";
import BookingButton from "../../../components/CenterButton";

import { devices } from "../../../components/breakpoints";
import { useLocalStorage } from "../../../components/localStorage";

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

    @media ${devices.laptop} {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
    }
  }

  h3 {
    @media ${devices.mobileS} {
      font-size: 0.9rem;
      margin-bottom: 0.6rem;
      padding: 0.2rem;
    }
    @media ${devices.mobileM} {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
      padding: 0.4rem;
    }
    @media ${devices.tablet} {
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      margin-bottom: 0.8rem;
      padding: 0.4rem;
    }
    @media ${devices.laptop} {
      font-size: 1.6rem;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      margin-bottom: 0.8rem;
      padding: 0.4rem;
    }
  }

  img {
    @media ${devices.tablet} {
      width: 280px;
    }
    @media ${devices.laptop} {
      width: 300px;
    }
  }

  ul {
    list-style-type: none;
    letter-spacing: 0.1rem;

    li {
      color: #081c15;
      font-family: "Cantarell";
    }

    li {
      @media ${devices.mobileS} {
        margin: 0.4rem 0rem;
      }
      @media ${devices.mobileM} {
        margin: 0.7rem 0rem;
      }
    }

    li:nth-child(1) {
      @media ${devices.mobileS} {
        margin-top: 0.2rem;
        letter-spacing: 0.04rem;
        font-size: 0.8rem;
      }
      @media ${devices.mobileM} {
        letter-spacing: 0.12rem;
        font-size: 1rem;
      }
      @media ${devices.tablet} {
        letter-spacing: 0.15rem;
        font-size: 1.2rem;
      }
      @media ${devices.laptop} {
        letter-spacing: 0.18rem;
        font-size: 1.6rem;
      }
    }
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
  const [getExtras, setGetExtras] = useLocalStorage("extras", "car");

  console.log(getExtras);

  const chartInfo = [
    "Extra:",
    `1 ${getExtras.baby ? "Bilbarnstol" : ""}, ${
      getExtras.animals ? "Husdjur" : ""
    }${getExtras.wheelchair ? "Rullstol" : ""}`,

    "Rabatt 10%",
    "Totalt: 360 kr",
  ];

  return (
    <StyledChart>
      <div className="chart">
        <h3>Du har valt guldpaketet!</h3>
        <img src={getExtras.car} alt="chartPic" />
        {chartInfo.map((info, i) => (
          <ul key={i}>
            <li>{info}</li>
          </ul>
        ))}
      </div>
      <NavLink to="/booking">
        <BookingButton
          label="Bekräfta bokning"
          onClick={() => history.push("/booking")}
        />
      </NavLink>
    </StyledChart>
  );
}

export default Index;
