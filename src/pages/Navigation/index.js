import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiUser, FiSun, FiMoon } from 'react-icons/fi';
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";


const NavStyle = styled.nav`
width: 100%;
height: 10vh; 
display: flex;
flex-direction: row;
position: absolute;
bottom: 0;
left: 0;
border-top-left-radius: 1.6rem;
border-top-right-radius: 1.6rem;
border: 3px solid #081c15;

 > ul {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0 1.4rem;

    

    > li {
        list-style: none;
        font-size: 1.6rem;
        &:hover{
        color: #252D20a9;
        cursor: pointer;
        }

    }

   
} 
`

const ToggleStyle = styled.aside`
    border: 1px solid #adc178;
    font-size: 1.6rem;
    padding: 0.4rem;
    padding-bottom: .1rem; 
    border-radius: .5rem;
    /* background-color: #4D8C2D; */
    
    
    :hover{
        background-color: #55a630;
        opacity: 0.8;
    }

    :active{

    }
`

function Index({themetoggler, theme, }) {

        const history = useHistory()

        const style = { color: "#F7F9F8"}

    return (  
       
        <Router>
        <NavStyle>
            <ul>
               
                    <li>
                    <Link to="/login"><FiUser onClick={() => history.push("/login")}/></Link>
                    </li>
                  
                
                <li>
                <Link to="/search"><FiSearch onClick={() => history.push("/search")}/></Link>
                </li>
                
               <ToggleStyle>
               {theme === 'light' ? <FiMoon onClick={() => themetoggler()}/> : <FiSun style={style} onClick={() => themetoggler()}  />}
               </ToggleStyle>
            </ul>
        </NavStyle>
        </Router>
        
    )
}

export default Index
