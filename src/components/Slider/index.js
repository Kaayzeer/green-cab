import { useState } from "react";
import { SliderData } from "../SliderData";
import CenterButton from "../CenterButton";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";

const StyledSection = styled.div`
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

  section {
    width: 102%;
    height: 102%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid rgba(255, 255, 255);
    border-radius: 16px;

    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(7px);
  }
`;

function Index({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <StyledSection>
        <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
        <div className="underGlass">
          <span className="ball"></span>
          <span className="ballTwo"></span>
          <span className="ballFront"></span>
          {SliderData.map((slide, i) => (
            <>
              {i === current && (
                <section
                  key={slide.id}
                  className={i === current ? "slide active" : "slide"}
                >
                  <h3 className="h3">{slide.type}</h3>
                  <img src={slide.pic} alt="" className="image" />
                  <h5>{slide.capacity}</h5>
                  <p>{slide.price}</p>
                </section>
              )}
            </>
          ))}
        </div>
      </StyledSection>

      <CenterButton label="Bekräfta bokning" />
    </>
  );
}

export default Index;
