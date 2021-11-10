import styled from "styled-components";
import { devices } from "../../components/breakpoints";

export const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 100%;
  margin: 0;
  position: relative;

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 1.4rem;
    z-index: 103;

    &:hover {
      font-size: 2rem;

      @media ${devices.mobileS} {
        font-size: 1.5rem;
      }
    }

    @media ${devices.mobileL} {
      font-size: 2rem;
    }
  }

  .rightArrow {
    position: absolute;
    top: 50%;
    right: 10%;
    font-size: 1.4rem;
    z-index: 103;

    &:hover {
      font-size: 2rem;

      @media ${devices.mobileS} {
        font-size: 1.5rem;
      }
    }

    @media ${devices.mobileL} {
      font-size: 2rem;
    }
  }

  .underGlass {
    width: 90%;
    height: 70%;
    border-radius: 16px;
    border: none;
    background: transparent;
    position: relative;
    overflow: hidden;
  }

  .ball {
    position: absolute;
    top: 30%;
    left: -20%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: linear-gradient(
      106deg,
      rgba(155, 250, 125, 0.6643032212885154) 0%,
      rgba(31, 165, 240, 0.41220238095238093) 100%
    );

    animation: move 20s linear infinite;
  }

  .ballTwo {
    position: absolute;
    top: 0%;
    right: -50%;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: linear-gradient(
      106deg,
      rgba(201, 250, 125, 0.773546918767507) 1%,
      rgba(245, 182, 80, 0.6727065826330532) 100%
    );
    animation: movetwo 30s linear infinite;
  }

  .ballFront {
    position: absolute;
    top: 75%;
    right: -10%;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      106deg,
      rgba(201, 250, 125, 0.573546918767507) 1%,
      rgba(245, 182, 80, 0.5727065826330532) 100%
    );
    opacity: 0.8;
    animation: moveFront 10s linear infinite;
  }

  .ballFrontTwo {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      106deg,
      rgba(201, 250, 125, 0.573546918767507) 1%,
      rgba(245, 182, 80, 0.5727065826330532) 100%
    );
    opacity: 0.8;
    animation: moveFront 10s linear infinite;
  }

  .ballFrontThree {
    position: absolute;
    top: -20%;
    left: -20%;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      106deg,
      rgba(155, 250, 125, 0.6643032212885154) 0%,
      rgba(31, 165, 240, 0.41220238095238093) 100%
    );
    opacity: 0.8;
    animation: moveFront 10s linear infinite;
  }

  .ballFrontFour {
    position: absolute;
    top: 30%;
    right: 20%;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      106deg,
      rgba(155, 250, 125, 0.6643032212885154) 0%,
      rgba(31, 165, 240, 0.41220238095238093) 100%
    );
    opacity: 0.8;
    animation: moveFront 10s linear infinite;
  }

  .ballFrontFive {
    position: absolute;
    top: 70%;
    left: 10%;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    opacity: 0.8;
  }

  .ballFrontSix {
    position: absolute;
    top: 70%;
    left: 10%;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      90deg,
      rgba(195, 221, 179, 0.8032036613272311) 0%,
      rgba(231, 212, 224, 1) 50%,
      rgba(94, 138, 62, 1) 100%
    );
    opacity: 0.8;
  }

  .ballFrontSeven {
    position: absolute;
    top: 60%;
    left: 30%;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    z-index: 102;
    background: linear-gradient(
      90deg,
      rgba(195, 221, 179, 0.8032036613272311) 0%,
      rgba(231, 212, 224, 1) 50%,
      rgba(94, 138, 62, 1) 100%
    );
    opacity: 0.8;
  }

  @keyframes move {
    20% {
      top: 30%;
    }

    40% {
      transform: rotate(45deg);
    }

    100% {
      left: 120%;
      top: 0%;
      transform: rotate(-45deg);
    }
  }

  @keyframes movetwo {
    20% {
      top: 5%;
    }

    40% {
      transform: rotate(-45deg);
    }

    100% {
      right: 120%;
      top: 70%;
      transform: rotate(45deg);
    }
  }

  @keyframes moveFront {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  ul {
    width: 102%;
    height: 102%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid ${(props) => props.theme.body};
    border-radius: 16px;
    list-style-type: none;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(7px);

    li {
      font-family: "cantarell";
    }

    li:nth-child(1) {
      letter-spacing: 0.08rem;

      @media ${devices.mobileS} {
        font-weight: bold;
        font-size: 1.3rem;
      }

      @media ${devices.mobileL} {
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: 0.2rem;
      }
      @media ${devices.laptop} {
        font-weight: bold;
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
      }
    }

    li:nth-child(2) img {
      @media ${devices.mobileL} {
        width: 300px;
      }
      @media ${devices.tablet} {
        width: 320px;
      }
      @media ${devices.laptop} {
        width: 350px;
      }
    }

    li:nth-child(3) {
      @media ${devices.mobileS} {
        font-size: 1rem;
      }
      @media ${devices.mobileL} {
        font-size: 1.6rem;
      }
      @media ${devices.tablet} {
        font-size: 1.8rem;
      }
      @media ${devices.laptop} {
        font-size: 2rem;
      }
    }

    li:nth-child(4) {
      @media ${devices.mobileL} {
        font-size: 1.6rem;
      }
      @media ${devices.tablet} {
        font-size: 1.8rem;
      }
      @media ${devices.laptop} {
        font-size: 2rem;
      }
    }
  }

  button {
    position: absolute;
    bottom: 6rem;
    width: 108px;
    height: 30px;
    letter-spacing: 0.05rem;
    border-radius: 35px;
    border: 1px solid ${(props) => props.theme.boxShadow};
    box-shadow: 1px 5px 2px -3px ${(props) => props.theme.boxShadow};
  }
`;
