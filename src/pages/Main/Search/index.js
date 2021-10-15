import React from 'react'
import styled from 'styled-components'
import CarButton from '../../../components/CenterButton'
import Map from '../../../components/Map'

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
    }
`
const ButtonContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    > button {
        width: 5rem;
        height: 2rem;
        border: none;
        border-radius: 1rem;
        letter-spacing: 0.1rem; 
        box-shadow: 1px 1px 1px 1px #d1d4cb;
        
    }
`



function index(props) {

  
    return (
        <>
        <SearchContainer>
          <input type='text' placeholder='Från' />
          <input type='text' placeholder='Till' />
            <p>När vill du åka?</p>
        </SearchContainer>
        <ButtonContainer>
            <button>Åka nu</button>
            <button>Avgång</button>
            <button>Ankomst</button>
        </ButtonContainer>
        <Map />
        <CarButton label='Välj bil'/>
        </>

        
    )
}

export default index
