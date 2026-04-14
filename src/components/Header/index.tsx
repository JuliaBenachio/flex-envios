import { useState } from 'react'
import logo from '../../assets/logo.jpeg'
import * as S from './styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <S.Container $aberto={isMenuOpen}>
      <S.Bar>
        <div>
          <S.Logo src={logo} alt="Logo" />
        </div>
        <S.Hamburger
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          $aberto={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.Hamburger>

        <S.MenuMobile $aberto={isMenuOpen}>
          <li>
            <a href="#servicos" onClick={handleClick}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#vantagens" onClick={handleClick}>
              Vantagens
            </a>
          </li>
          <li>
            <a href="#clientes" onClick={handleClick}>
              Clientes
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={handleClick}>
              Sobre nós
            </a>
          </li>

          <S.Divisor />

          <S.InputContainerMobile>
            <S.InputPesquisa placeholder="Rastreie sua encomenda" />
            <S.Lupa>
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </S.Lupa>
          </S.InputContainerMobile>

          <S.BotaoAreaClienteMobile>Área do Cliente</S.BotaoAreaClienteMobile>
        </S.MenuMobile>
        <nav>
          <S.menu>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#vantagens">Vantagens</a>
            </li>
            <li>
              <a href="#clientes">Clientes</a>
            </li>
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
          </S.menu>
        </nav>
        <S.InputContainer>
          <S.InputPesquisa
            type="text"
            placeholder="Rastreie sua encomenda agora"
          />
          <S.Lupa>
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </S.Lupa>
        </S.InputContainer>
        <div>
          <S.BotaoAreaCliente>Área do Cliente</S.BotaoAreaCliente>
        </div>
      </S.Bar>
    </S.Container>
  )
}

export default Header
