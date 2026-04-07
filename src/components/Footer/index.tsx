import logo from '../../assets/logo.jpeg'
import { FaWhatsapp } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Logo src={logo} alt="FlexEnvios" />

        <S.Contato>
          <S.ContatoItem>
            <FaWhatsapp />
            <p>(11)99626-6608</p>
          </S.ContatoItem>
          <S.ContatoItem>
            <MdMailOutline />
            <p>contato@flexenvios.com.br</p>
          </S.ContatoItem>
        </S.Contato>
      </S.Container>
    </S.Footer>
  )
}

export default Footer
