import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    }


  body {
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

  }
  body, input, button, textarea {
    font-family: 'Poppins';
  }
  button {
    text-align: center;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

`;

