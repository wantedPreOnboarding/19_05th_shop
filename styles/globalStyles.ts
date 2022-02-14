import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Apple SD Gothic Neo";
  }

  a {
    color:inherit;
    text-decoration: none;
  }
  
  button{
    padding: 0;
    margin: 0;
    border: none;
    background: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
