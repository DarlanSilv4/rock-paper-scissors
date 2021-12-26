import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    background-repeat: no-repeat;
    color:white;
    font-family: 'Barlow Semi Condensed', sans-serif;
    height: 100vh;
    padding: 25px;
    width: 100vw;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;