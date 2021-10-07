import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.form`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    /* width: 100vw; */
    /* margin: 10px 0px; */

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
        height: 1.6rem;
        border: none;
        border-radius: 1rem;
        color: #dee2e6;
        letter-spacing: 0.03rem;

      
        
    }
`

function index() {
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
        </>
    )
}

export default index
