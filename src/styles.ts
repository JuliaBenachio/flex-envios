import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
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
