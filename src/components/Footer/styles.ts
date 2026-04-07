import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.footer`
  background-color: ${cores.azulPrincipal};
  padding: 40px 0;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 60px;
`

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: right;
  align-items: center;

  p {
    margin: 5px 0;
  }
`

export const ContatoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
