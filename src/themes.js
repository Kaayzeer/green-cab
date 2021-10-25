import { createGlobalStyle } from "styled-components";

// export const lightTheme = {
//     bgPrimary: "#fff",
//     bgSecondary: "#fff",
//     color: "#000",
//     colorDarkBg: "#fff",
//     themePrimary: "#43456C",
//     tone: "#7A7A7A",
//   };

//   export const darkTheme = {
//     bgPrimary: "#272727",
//     bgSecondary: "#1a1a1a",
//     color: "#fff",
//     colorDarkBg: "#000",
//     themePrimary: "#B5B8EB",
//     tone: "#747474",
//   };

export const lightTheme = {
  body: "#F7F9F8",
  li: "#081c15",
  a: "#081c15",
  h1: "#081c15",
  button: "#766153",
  backgroundImage: "linear-gradient(180deg, #adc178, #dde5b6)",
  text: "#081c15",
  input: "#e5e5e5",
  label: "#F7F9F8",
  /* nav: '#766153', */
  border: "#adc178",
  boxShadow: "#1f2421",

  /*  form: 'linear-gradient(180deg, #adc178, #dde5b6)', */
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
  boxShadow: "#F7F9F8",
};

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
        background-color: ${(props) => props.theme.body};
    }

    nav {
        background-color: ${(props) => props.theme.nav};
        border: ${(props) => props.theme.border};
        /* box-shadow: ${(props) => props.theme.boxShadow}; */
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
        /* background-image: ${(props) => props.theme.input[1]}; */
    }
    label {
        color: ${(props) => props.theme.text};
    }

    button {
        background-color: ${(props) => props.theme.button};
        color: ${(props) => props.theme.text};
        background-image: ${(props) => props.theme.backgroundImage};
        
    }

   /*  form {
        background-color: ${(props) => props.theme.form};
    } */

`;
