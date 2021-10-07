import {useState} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Main from './components/Main/Main.js'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './themes'


const StyledApp = styled.div`
position: relative;
width: 375px; 
height: 812px;
margin: 0 auto;
padding: 0;
`

function App() {

  const [theme, setTheme] = useState('light');

  const themetoggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Router>
    <StyledApp>
      <Navigation themetoggler={themetoggler} theme={theme}/> 
      <Main  />
      <Footer />
    </StyledApp>
    </Router>
    </ThemeProvider>
  );
}

export default App;
