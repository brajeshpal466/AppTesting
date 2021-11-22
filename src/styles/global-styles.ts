import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');


  html,
  body {
    height: 100%;
    width: 100%;
    font-family : 'Montserrat';
    font-weight: 500;
  }


  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
 
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    
  }
`;
