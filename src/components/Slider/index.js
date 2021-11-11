import React, { useState } from "react";
import { SliderData } from "../SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { StyledSection } from "./sliderCss";
import CarChoices from "../CarChoices";
import standardChoiceCar from "../../Images/standardChoiceCar.png";
import goldChoiceCar from "../../Images/goldChoiceCar.png";
import XLChoiceCar from "../../Images/XLchoiceCar.png";
import { useLocalStorage } from "../localStorage";

function Index({ slides }) {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [saveExtras, setSaveExtras] = useLocalStorage("extras", "");

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleChange = (e) => {
    console.log(e.target.className);
    if (e.target.className == 0) {
      setSaveExtras({
        ...saveExtras,
        [e.target.name]: e.target.checked,
        car: standardChoiceCar,
      });
    } else if (e.target.className == 1) {
      setSaveExtras({
        ...saveExtras,
        [e.target.name]: e.target.checked,
        car: goldChoiceCar,
      });
    } else {
      setSaveExtras({
        ...saveExtras,
        [e.target.name]: e.target.checked,
        car: XLChoiceCar,
      });
    }
  };

  const handleClose = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setShowModal(false);
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
          <span className="ballFrontTwo"></span>
          <span className="ballFrontThree"></span>
          <span className="ballFrontFour"></span>
          <span className="ballFrontFive"></span>
          <span className="ballFrontSix"></span>
          <span className="ballFrontSeven"></span>
          {SliderData.map((slide, i) => {
            return (
              <React.Fragment key={slide.id}>
                {i === current && (
                  <ul className={i === current ? "slide active" : "slide"}>
                    <li className="h3">{slide.type}</li>
                    <li>
                      <img src={slide.pic} alt="" className="image" />
                    </li>
                    <li>{slide.capacity}</li>
                    <li>{slide.price}</li>
                  </ul>
                )}
              </React.Fragment>
            );
          })}
        </div>
        {showModal && (
          <CarChoices
            saveExtras={saveExtras}
            handleClose={handleClose}
            handleChange={handleChange}
          />
        )}
        <button onClick={() => setShowModal(true)}>Tillval</button>
      </StyledSection>
    </>
  );
}

export default Index;
