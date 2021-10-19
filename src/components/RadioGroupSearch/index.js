import React, { useState } from "react";
import styled from "styled-components";

const RadioContainer = styled.form`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 1rem;
    /* border: 1px solid ${props => props.theme.text}; */
    height: 5vh;
    /* margin-top: 1rem; */
    background: transparent;

  & > * input {
    visibility: hidden;
  }

  > label {
    height: 2rem; 
    padding: 0.4rem;
    letter-spacing: 0.1rem;
    z-index:2;
    text-align: center;
    font-family: 'ubuntu';

    &:hover{
        opacity: .9;
    }
    
  }

  input:checked {
    visibility: hidden;
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

const Buttons = ({radioButtons}) => {

  console.log()

  const [selected, setSelected] = useState(true);
  const [defaultValue, setDefaultValue] = useState(0);

  const handleChange = (e) => {
    setSelected(e.target.value === selected);
    console.log(e.target.value);
  };

  const delAvWidth = 100 / radioButtons.length
  
  const style = {
      width: `calc(${delAvWidth} * 1%)`,
      left: !defaultValue ? '0' : `calc(${delAvWidth} * ${defaultValue} * 1%)`,
  }
  
  return (
    <RadioContainer onChange={handleChange}>
      {radioButtons.map((button, index) => (
        <label key={button.name} htmlFor={button.value} onChange={() => setDefaultValue(index)}>
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
  );
};

function index(props) {
  return <Buttons radioButtons={props.options} />;
}

export default index;
