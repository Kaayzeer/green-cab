import React, { useState } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sv from "date-fns/locale/sv";

const RadioContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  height: 5vh;
  background: transparent;

  & > * input {
    visibility: hidden;
  }

  > label {
    height: 2rem;
    padding: 0.4rem;
    letter-spacing: 0.1rem;
    z-index: 2;
    text-align: center;
    font-family: "ubuntu";

    &:hover {
      opacity: 0.9;
    }
  }

  button {
    position: absolute;
    top: 2;
    height: 2rem;
    border: none;
    padding: 0.3rem;
    border-radius: 1rem;
    letter-spacing: 0.1rem;
    opacity: 0.7;
    z-index: 1;
    transition: all 0.3s linear;
  }
`;

const DateContainer = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 0.6rem;

    & input {
      border: none;
      height: 3.6rem;
      width: 50%;
      text-align: center;
      letter-spacing: 0.1rem;
    }
  }
`;

const Buttons = ({ radioButtons }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [selected, setSelected] = useState(true);
  const [defaultValue, setDefaultValue] = useState(0);

  const handleChange = (e) => {
    setSelected(e.target.value === selected);
  };

  const delAvWidth = 100 / radioButtons.length;

  const style = {
    width: `calc(${delAvWidth} * 1%)`,
    left: !defaultValue ? "0" : `calc(${delAvWidth} * ${defaultValue} * 1%)`,
  };

  registerLocale("sv", sv);

  return (
    <>
      <RadioContainer onChange={handleChange}>
        {radioButtons.map((button, index) => (
          <label
            key={button.name}
            htmlFor={button.value}
            onChange={() => setDefaultValue(index)}
          >
            <input
              key={button.value}
              type="radio"
              id={button.value}
              value={button.value}
              name="options"
              defaultChecked={button.default}
            />

            {button.name}
          </label>
        ))}
        <button style={style}></button>
      </RadioContainer>
      <DateContainer>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="sv"
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="Pp"
        />
      </DateContainer>
    </>
  );
};

function index(props) {
  return <Buttons radioButtons={props.options} />;
}

export default index;
