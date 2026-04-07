import despachante from '../../assets/despachante.jpg'
import netbrilho from '../../assets/netbrilho.jpg'
import lojaITP from '../../assets/lojaITP.jpg'
import rw from '../../assets/rw.jpg'
import * as S from './styles'

const Clientes = () => {
  return (
    <S.Container>
      <div>
        <S.Titulo>Conheça nossos clientes</S.Titulo>
      </div>
      <S.ListaClientes>
        <S.ContainerImagem>
          <S.Imagem src={despachante} alt="Despachante" />
        </S.ContainerImagem>
        <S.ContainerImagem>
          <S.Imagem src={netbrilho} alt="Netbrilho" />
        </S.ContainerImagem>
        <S.ContainerImagem>
          <S.Imagem src={lojaITP} alt="Loja ITP" />
        </S.ContainerImagem>
        <S.ContainerImagem>
          <S.Imagem src={rw} alt="RW" />
        </S.ContainerImagem>
      </S.ListaClientes>
    </S.Container>
  )
}

export default Clientes
