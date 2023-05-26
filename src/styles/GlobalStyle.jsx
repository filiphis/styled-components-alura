import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: grey;
  }
`;

export const GlobalStyle = createGlobalStyle(globalStyle);
