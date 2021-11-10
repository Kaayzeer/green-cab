import { useState } from "react";
import { SliderData } from "../SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { StyledSection } from "./sliderCss";
import CarChoices from "../CarChoices";

function Index({ slides }) {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleClose = () => {
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
              <>
                {i === current && (
                  <ul
                    key={slide.id}
                    className={i === current ? "slide active" : "slide"}
                  >
                    <li className="h3">{slide.type}</li>
                    <li>
                      <img src={slide.pic} alt="" className="image" />
                    </li>
                    <li>{slide.capacity}</li>
                    <li>{slide.price}</li>
                  </ul>
                )}
              </>
            );
          })}
        </div>
        {showModal && <CarChoices handleClose={handleClose} />}
        <button onClick={() => setShowModal(true)}>Tillval</button>
      </StyledSection>
    </>
  );
}

export default Index;
