import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary};
    cursor: default;
    overflow: hidden;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  h1{
    font-size: 7.5rem;
    transform: translateX(-8px);
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 3.8rem;
      line-height: 4.5rem;
      margin: 0;
    }
  }
  h2{
    font-size: 3.6rem;
  }
  h3{
    font-size: 4rem;
  }
  p{
    font-size: 1.8rem;
  }
`;

export default GlobalStyles;