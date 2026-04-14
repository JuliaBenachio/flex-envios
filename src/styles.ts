import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    overflow-x: hidden;
  }

  *{
    scroll-behavior: smooth;

  }

  section {
  scroll-margin-top: 80px;
}

@media (max-width: 768px) {
  section {
    scroll-margin-top: 60px;
  }
}
`

export const cores = {
  azulPrincipal: '#2151B4',
  amareloPrincipal: '#FFD147',
  branco: '#FFFFFF',
  preto: '#000000',
  cinza: '#D1D5DB',
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1280px',
}
