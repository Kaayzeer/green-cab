import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#F7F9F8',
    li: '#081c15',
    a: '#081c15',
    button: /* '#8CC96D' */'#478E23',/* linearGradient('90deg, #8CC96D, #478E23') */
    input: '#e5e5e5',
    label: '#F7F9F8',
    
}

export const darkTheme = {
    body: '#081c15',
    li: '#F7F9F8',
    a: '#F7F9F8',
    p: '#F7F9F8',
    button: '#478E23',/* linearGradient('90deg, #74c69d, #2d6a4f') */
    input: '#F7F9F8',
    label: '#F7F9F8',
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
        background-color: ${props => props.theme.button}
    }
`
