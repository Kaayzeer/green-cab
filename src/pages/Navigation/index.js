import React from "react";
import styled from "styled-components";
import { devices } from "../../components/breakpoints";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

const ArrowContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999;

  > svg {
    color: #478e23;
    font-size: 2.6rem;

    @media ${devices.mobileS} {
      font-size: 1.8rem;
    }

    @media ${devices.mobileM} {
      font-size: 2rem;
    }

    @media ${devices.mobileL} {
      font-size: 3rem;
    }
    @media ${devices.laptop} {
      font-size: 4.5rem;
    }
  }
`;

const NavStyle = styled.nav`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  border: 1px solid #081c15;
  box-shadow: 1px 0px 4px 1px ${(props) => props.theme.boxShadow};

  > ul {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0 1.4rem;
    list-style: none;

    > li {
      font-size: 1.6rem;
      list-style: none;

      @media ${devices.mobileL} {
        font-size: 2.5rem;
      }
      @media ${devices.laptop} {
        font-size: 3.5rem;
      }
      &:hover {
        color: #252d20a9;
        cursor: pointer;
      }
    }
  }
`;

const ToggleStyle = styled.aside`
  border: 1px solid #adc178;
  font-size: 1.6rem;
  padding: 0.4rem;
  padding-bottom: 0.1rem;
  border-radius: 0.5rem;
  /* background-color: #4D8C2D; */

  :hover {
    background-color: #55a630;
    opacity: 0.8;
  }

  > svg {
    color: ${(props) => props.theme.li};

    @media ${devices.mobileL} {
      font-size: 2.5rem;
    }
    @media ${devices.laptop} {
      font-size: 3.5rem;
    }
  }
`;

function Index({ themetoggler, theme }) {
  const history = useHistory();

  return (
    <Router>
      <ArrowContainer>
        <AiOutlineArrowLeft onClick={() => history.goBack()} />
      </ArrowContainer>
      <NavStyle>
        <ul>
          <li>
            <Link to="/cars">
              <IoCarSportOutline onClick={() => history.push("/cars")} />
            </Link>
          </li>

          <li>
            <Link to="/search">
              <FiSearch onClick={() => history.push("/search")} />
            </Link>
          </li>

          <ToggleStyle>
            {theme === "light" ? (
              <FiMoon onClick={() => themetoggler()} />
            ) : (
              <FiSun onClick={() => themetoggler()} />
            )}
          </ToggleStyle>
        </ul>
      </NavStyle>
    </Router>
  );
}

export default Index;
