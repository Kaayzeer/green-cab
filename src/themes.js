import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F7F9F8",
  li: "#081c15",
  a: "#081c15",
  h1: "#081c15",
  backgroundImage: "linear-gradient(180deg, #adc178, #dde5b6)",
  text: "#081c15",
  input: "#e5e5e5",
  label: "#F7F9F8",
  border: "#adc178",
  boxShadow: "#1f2421",
  nav: "#F7F9F8",
  slide: "#ddbea9",
};

export const darkTheme = {
  body: "#081c15",
  li: "#F7F9F8",
  a: "#F7F9F8",
  h1: "#F7F9F8",
  p: "#F7F9F8",
  button: "#478E23",
  text: "#dee2e6",
  input: "#F7F9F8",
  label: "#F7F9F8",
  nav: "#1f2421",
  border: "#adc178",
  boxShadow: "#687D5A",
  slide: "#F7F9F8",
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 1024px;
  max-height: 1366px;
  margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: ${(props) => props.theme.body};
    }

    nav {
        background-color: ${(props) => props.theme.nav};
        border: ${(props) => props.theme.border};

    }
    li {
        color: ${(props) => props.theme.li};
    }
    a {
        color: ${(props) => props.theme.a};
    }
    p {
        color: ${(props) => props.theme.p};
    }

    span {
        background-color: ${(props) => props.theme.span};
        
    }
    input {
        background-color: ${(props) => props.theme.input};

    }
    label {
        color: ${(props) => props.theme.text};
    }

    button {
        color: ${(props) => props.theme.text};
        background-image: ${(props) => props.theme.backgroundImage};
        background-color: ${(props) => props.theme.button};
    }

   section{
    background-color: ${(props) => props.theme.slide};
   }

`;
