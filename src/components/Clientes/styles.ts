import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 48px;
  background-color: ${cores.amareloPrincipal};

  margin: 0 auto;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 24px;
    gap: 48px;
  }
`

export const ListaClientes = styled.ul`
  display: grid;

  /* 📱 Mobile → 2 colunas */
  grid-template-columns: repeat(2, 1fr);

  gap: 16px;

  list-style: none;
  margin: 0 10px;
  padding: 0;

  /* 📱 Tablet → 3 colunas */
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 💻 Desktop → todos em uma linha */
  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Imagem = styled.img`
  max-width: 90%;
  max-height: 80%;

  width: auto;
  height: auto;

  object-fit: contain;
`

export const ContainerImagem = styled.li`
  width: 100%;
  height: 90px;

  border-radius: 20px;
  background-color: ${cores.branco};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Titulo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${cores.preto};
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
`
