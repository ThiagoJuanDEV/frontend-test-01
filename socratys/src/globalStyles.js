import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button, input {
    border: none;
  }
`;
