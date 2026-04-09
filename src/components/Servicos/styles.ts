import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  padding: 60px 16px;
  background-color: ${cores.azulPrincipal};
  margin: -16px auto;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 24px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 100px 0;
  }
`

export const Titulos = styled.div`
  max-width: 350px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }

  h3 {
    font-size: 18px;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin: 0;

    h1 {
      font-size: 36px;
    }

    h3 {
      font-size: 24px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 46px;
    }

    h3 {
      font-size: 32px;
    }
  }
`

export const Cabecalho = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 👈 mobile */
  gap: 24px;

  margin: 0 auto;
  max-width: 1100px;

  color: ${cores.branco};
  text-align: center;

  p {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    gap: 40px;
    padding: 0 24px 40px;

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 40px 40px;

    p {
      font-size: 24px;
    }
  }
`

export const Imagem = styled.img`
  width: 100%;
  height: 200px;

  object-fit: cover;
  border-radius: 40px 40px 0 0;

  @media (min-width: ${breakpoints.tablet}) {
    height: 240px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 268px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 100%;
  max-width: 432px;

  text-align: center;

  background-color: ${cores.branco};
  border-radius: 40px;
  color: ${cores.preto};

  h2,
  p {
    max-width: 340px;
    width: 100%;
  }

  p {
    margin: 0 0 24px 0;
    font-size: 14px;
  }

  h2 {
    margin: 20px 0 0 0;
    color: ${cores.azulPrincipal};
    font-size: 18px;
  }

  /* 📱 Tablet */
  @media (min-width: ${breakpoints.tablet}) {
    flex: 1 1 calc(50% - 40px);

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }

  /* 💻 Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    flex: 1 1 calc(33.33% - 40px);

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 24px; /* mobile mais compacto */
  margin-top: 40px;
  padding: 0 16px;

  /* 📱 Tablet */
  @media (min-width: ${breakpoints.tablet}) {
    gap: 32px;
    padding: 0 24px;
  }

  /* 💻 Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    gap: 40px;
    padding: 0;
  }
`
