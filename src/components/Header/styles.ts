import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.header`
  background-color: ${cores.branco};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  box-sizing: border-box;

  padding: 20px 40px; /* 🔥 REMOVE o 32px de baixo */
  border-radius: 0 0 32px 32px;
`

export const menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  li {
    position: relative;
  }

  a {
    text-decoration: none;
    color: ${cores.preto};
    font-weight: bold;
    font-size: 18px;

    position: relative;
    display: inline-block;

    transition: all 0.3s ease;
    will-change: transform;
  }

  a:hover {
    color: ${cores.azulPrincipal};
    transform: scale(1.08) translateY(-2px);
  }

  a::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -6px;

    width: 0;
    height: 2px;
    background-color: ${cores.azulPrincipal};

    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  a:hover::after {
    width: 100%;
  }
`

export const Logo = styled.img`
  max-width: 240px;
  max-height: 68px;
  margin-left: 8px;
`

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 12px; /* 🔥 espaço visual controlado */
`

export const BotaoAreaCliente = styled.button`
  background-color: ${cores.amareloPrincipal};
  color: ${cores.azulPrincipal};
  border: none;
  padding: 16px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 14px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const InputPesquisa = styled.input`
  flex: 1;

  border: none;
  background: transparent;
  outline: none;

  font-size: 16px;
  color: #374151;

  &::placeholder {
    color: #9ca3af;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  width: 352px;
  height: 36px;

  padding: 8px 20px;
  gap: 8px;

  background-color: #e5e7eb;
  border-radius: 30px;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`

export const Lupa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;

    stroke: #6b7280;
    stroke-width: 2;
    fill: none;
  }
`

export const Hamburger = styled.div<{ $aberto: boolean }>`
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    height: 3px;
    width: 100%;
    background-color: ${cores.preto};
    border-radius: 2px;
    transition: 0.3s;
  }

  ${({ $aberto }) =>
    $aberto &&
    `
    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const MenuMobile = styled.ul<{ $aberto: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  background: white;

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: ${({ $aberto }) => ($aberto ? '500px' : '0')};
  padding: ${({ $aberto }) => ($aberto ? '24px' : '0')};
  gap: ${({ $aberto }) => ($aberto ? '20px' : '0')};

  overflow: hidden;
  transition: all 0.3s ease;

  box-shadow: ${({ $aberto }) =>
    $aberto ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'};

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`

export const InputContainerMobile = styled.div`
  width: 100%;
  max-width: 320px;

  display: flex;
  align-items: center;

  padding: 10px 16px;
  gap: 8px;

  background-color: #e5e7eb;
  border-radius: 30px;
`

export const BotaoAreaClienteMobile = styled.button`
  width: 100%;
  max-width: 320px;

  padding: 14px;

  background-color: ${cores.amareloPrincipal};
  color: ${cores.azulPrincipal};

  border: none;
  border-radius: 14px;

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;
`
