import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Banner = styled.div`
  width: 100%;
  height: 440px;
  background-color: ${cores.azulPrincipal};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 560px;
    height: 100%;
  }
`

export const Titulos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 120px;

  h1,
  h3 {
    color: ${cores.branco};
    font-weight: bold;
    margin: 0 0 0 126px;
  }

  h1 {
    font-size: 48px;
  }

  h3 {
    font-size: 36px;
  }
`

export const BannerRisco = styled.div`
  width: 100%;
  height: 440px;
  background-color: ${cores.branco};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 320px;
    max-height: 320px;
  }

  p {
    width: 60%;
    font-size: 36px;
    font-weight: bold;
    color: ${cores.preto};
    text-align: center;

    span {
      color: ${cores.azulPrincipal};
    }
  }
`

export const ContainerCardOrigem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CardOrigem = styled.div`
  width: 90%;
  max-width: 1100px;
  background-color: ${cores.branco};
  border-radius: 20px;
  padding: 40px;
  margin: -80px auto 40px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: ${cores.preto};
    margin: 0 0 16px 0;
  }

  h3 {
    font-size: 18px;
    color: ${cores.preto};
    margin: 0 0 24px 0;
  }
`
export const Motivos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
