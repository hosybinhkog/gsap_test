import { createGlobalStyle } from 'styled-components';
import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';

const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Sirin Stencil', cursive;
    scroll-behavior:"smooth";
  }

  body{
    font-family: 'Sirin Stencil', cursive;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 400
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
