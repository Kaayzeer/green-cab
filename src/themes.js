import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#F7F9F8',
    li: '#081c15',
    a: '#081c15',
    h1: '#081c15',
    button: ['#766153','#081c15', 'linear-gradient(180deg, #adc178, #dde5b6)'],
    input: '#e5e5e5',
    label: '#F7F9F8',
    nav: ['#766153', '#adc178']
    
}

export const darkTheme = {
    body: '#081c15',
    li: '#F7F9F8',
    a: '#F7F9F8',
    h1: '#F7F9F8',
    p: '#F7F9F8',
    button: ['#478E23','#dee2e6'],
    input: '#F7F9F8',
    label: '#F7F9F8',
    nav: ['#1f2421', '#adc178']
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: ${props => props.theme.body};
    }

    nav {
        background-color: ${props => props.theme.nav[0]};
        border: ${props => props.theme.nav[1]};
    }
    li {
        color: ${props => props.theme.li};
    }
    a {
        color: ${props => props.theme.a};
    }
    p {
        color: ${props => props.theme.p};
    }

    span {
        background-color: ${props => props.theme.span};
        
    }
    input {
        background-color: ${props => props.theme.input};
    }
    label {
        background-color: ${props => props.theme.label};
    }

    button {
        background-color: ${props => props.theme.button[0]};
        color: ${props => props.theme.button[1]};
        background-image: ${props => props.theme.button[2]};
        /* box-shadow: ${props => props.theme.button[3]} */
    }

`
