import React from 'react'
import styled from 'styled-components'
import CarButton from '../../../components/CenterButton'
import Map from '../../../components/Map'
import RadioGroup from '../../../components/RadioGroupSearch'


const SearchContainer = styled.form`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 35%;

    > input {
        display: inline;
        padding: 1.6rem;
        margin-top: 2rem;
        border: none;
        outline: none;
        border-radius: 1rem;
    }

    > p {
        margin: 2rem;
        font-family: 'roboto';
    }
`


function index() {

  const radioButtons = [
    { name: "Åka nu", value: "goNow", default: true },
    { name: "Avgång", value: "departure" },
    { name: "Ankomst", value: "arrival" },
  ];
  
    return (
        <>
        <SearchContainer>
          <input type='text' placeholder='Från' />
          <input type='text' placeholder='Till' />
            <p>När vill du åka?</p>
        </SearchContainer>

        
            <RadioGroup options={radioButtons}/>
       

        {/* <Map />
        <CarButton label='Välj bil'/> */}
        
        </>

        
    )
}

export default index
