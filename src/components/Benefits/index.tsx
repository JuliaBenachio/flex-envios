import * as S from './styles'
import diferenciais from '../../assets/diferenciais.jpg'
import { LuPuzzle } from 'react-icons/lu'
import { LuTruck } from 'react-icons/lu'
import { LuSearchCheck } from 'react-icons/lu'
import { LuBrain } from 'react-icons/lu'
import { LuCctv } from 'react-icons/lu'
import { FaTruckFast } from 'react-icons/fa6'

const Benefits = () => {
  return (
    <S.Container>
      <S.Titulo>
        <h1>Diferenciais da FlexEnvios</h1>
        <h3>Por que escolher a FlexEnvios?</h3>
        <span>______________________________________</span>
      </S.Titulo>
      <S.BenefitsContainer>
        <div>
          <S.Imagem src={diferenciais} alt="Diferenciais da FlexEnvios" />
        </div>
        <div>
          <S.BenefitsList>
            <S.BenefitItem>
              <S.Icone>
                <LuTruck />
              </S.Icone>
              <li>
                Multi transportadoras: O envio certo com o preço justo para cada
                necessidade.
              </li>
            </S.BenefitItem>
            <S.BenefitItem>
              <S.Icone>
                <LuCctv />
              </S.Icone>
              <li>
                Monitoramento em tempo real: Nossa tecnologia sistêmica aliada a
                uma equipe de especialistas, irão monitorar sua encomenda até a
                entrega.
              </li>
            </S.BenefitItem>
            <S.BenefitItem>
              <S.Icone>
                <LuBrain />
              </S.Icone>
              <li>
                AI: Nossa inteligência artificial trará sempre as melhores
                cotações para o trecho escolhido.
              </li>
            </S.BenefitItem>
            <S.BenefitItem>
              <S.Icone>
                <LuSearchCheck />
              </S.Icone>
              <li>
                Rastreio interativo: Seu cliente poderá receber cada status do
                envio pelo Whatsapp.
              </li>
            </S.BenefitItem>
            <S.BenefitItem>
              <S.Icone>
                <FaTruckFast />
              </S.Icone>
              <li>
                Entrega Flash: Temos entregas rápidas para diversas localidades.
              </li>
            </S.BenefitItem>
            <S.BenefitItem>
              <S.Icone>
                <LuPuzzle />
              </S.Icone>
              <li>Integrações: Nos conectamos com várias plataformas.</li>
            </S.BenefitItem>
          </S.BenefitsList>
        </div>
      </S.BenefitsContainer>
    </S.Container>
  )
}

export default Benefits
