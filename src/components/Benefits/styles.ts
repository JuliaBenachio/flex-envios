import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 80px 0;
  background-color: #f6f6f6;
`

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 686px;
  font-size: 24px;
  gap: 40px;
  list-style: none;
`

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${cores.azulPrincipal};
  h1 {
    font-size: 48px;
    margin: 0;
  }

  h3 {
    font-size: 24px;
    margin: 24px 0 0 0;
  }

  span {
    font-size: 24px;
    font-weight: bolder;
    color: ${cores.amareloPrincipal};
    margin: 1px 0;
  }
`

export const Imagem = styled.img`
  max-width: 480px;
  width: 100%;
  max-height: 700px;
  border-radius: 40px;
  border: 8px solid ${cores.azulPrincipal};
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin: 0 auto;
  padding: 0 40px;
`

export const Icone = styled.div`
  color: ${cores.azulPrincipal};
  font-size: 60px;
`

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
