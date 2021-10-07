import React from 'react'
import LandingImage from '../../../Images/Logo'
import styled from 'styled-components'



const LandingStyle = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    
`

const UlContainer = styled.div `
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 30vh;

    > ul {
    padding: 0 1.4rem;

    > li {
        list-style: none;
        font-size: 1.2rem;
        font-weight: bold;
        
    }

    
}
> p {
        padding: 1.6rem;
        text-align: center;
    }
`





function index({users}) {
    return (
        
    <LandingStyle>
     <LandingImage/>
        <UlContainer>
            <ul>
            {users.map(user => <li key={user.id}>Hej {user.name} välkommen tillbaka!</li>)}
            </ul>
            <p>
                Nu kan du boka en grön taxi och få 10% rabatt på din resa.
            </p>
        </UlContainer>
    </LandingStyle>
    
    )
}

export default index
