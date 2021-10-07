import React from 'react'
import styled from 'styled-components'
import { FiMoreHorizontal, FiSearch, FiUser, FiSun, FiMoon } from 'react-icons/fi';
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";
  import {useAuth} from '../../constants/firebase'

const NavStyle = styled.div`
width: 100%;
height: 10vh; 
display: flex;
flex-direction: row;
position: absolute;
bottom: 0;
left: 0;
background-color: #4D8C2D;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;

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

const ToggleStyle = styled.div`
    border: 1px solid #BFD2B5;
    font-size: 1.4rem;
    padding: 0.4rem;
    padding-bottom: .1rem; 
    border-radius: .5rem;
    background-color: #256605;
    
`

function Index({themetoggler, theme}) {

        const history = useHistory()

        const {user, logout} = useAuth()

    return (  
       
        <Router>
        <NavStyle>
            <ul>
                {user && (
                    <>
                    <li>
                    <Link to="/"><FiUser onClick={() => history.push("/landing")}/></Link>
                    </li>
                    <button>
                        Logout
                    </button>
                    </>
                )}

                {!user && (
                    <>
                    <li>
                    <Link to="/"><FiUser onClick={() => history.push("/landing")}/></Link>
                    </li>
                    </>
                )}
                
                <li>
                <Link to="/search"><FiSearch onClick={() => history.push("/search")}/></Link>
                </li>
                
               <ToggleStyle>
               {theme === 'light' ? <FiMoon onClick={() => themetoggler()}/> : <FiSun onClick={() => themetoggler()} />}
               </ToggleStyle>
            </ul>
        </NavStyle>
        </Router>
        
    )
}

export default Index
