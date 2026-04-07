import armazenamento from '../../assets/armazenamento.jpeg'
import coleta from '../../assets/coleta-e-entrega.jpg'
import sameday from '../../assets/sameday-nextday.jpg'
import card from '../../assets/card.jpg'
import custodia from '../../assets/custodia.jpg'
import servicos from '../../assets/servicos.jpg'

import * as S from './styles'

const Servicos = () => {
  return (
    <S.Container>
      <S.Cabecalho>
        <S.Titulos>
          <h1>Serviços da FlexEnvios</h1>
          <h3>Soluções simples e inteligentes</h3>
        </S.Titulos>
        <div>
          <p>
            Atendendo clientes de todos os segmentos e tamanhos, solucionando
            todas as etapas do processo logístico com acompanhamento dedicado,
            da primeira à última milha.
          </p>
          {/* <p>A FlexEnvios é uma empresa de logística que oferece soluções de transporte e entrega para empresas de todos os tamanhos. Com uma rede de parceiros e tecnologia avançada, a FlexEnvios garante entregas rápidas, seguras e eficientes em todo o território nacional.</p> */}
        </div>
      </S.Cabecalho>
      <S.CardContainer>
        <S.Card>
          <S.Imagem src={coleta} alt="Coletas e Entregas" />
          <h2>Coletas e Entregas</h2>
          <p>
            Atuamos em todo o mercado de carga fracionada, oferecendo soluções
            personalizadas para atender às necessidades de cada cliente.
          </p>
        </S.Card>
        <S.Card>
          <S.Imagem src={sameday} alt="" />
          <h2>Sameday e Nextday</h2>
          <p>
            Oferecemos soluções de entrega rápida para clientes que precisam de
            prazo reduzido, garantindo pontualidade e eficiência em todas as
            entregas.
          </p>
        </S.Card>
        <S.Card>
          <S.Imagem src={armazenamento} alt="Armazenamento" />
          <h2>Armazenamento</h2>
          <p>
            Oferecemos soluções de armazenamento para empresas que precisam de
            espaços de armazenamento seguros e eficientes, garantindo a proteção
            e o controle adequado de seus produtos.
          </p>
        </S.Card>
        <S.Card>
          <S.Imagem src={card} alt="FlexEnvios Cards" />
          <h2>FlexEnvios Cards</h2>
          <p>
            Oferecemos soluções de pagamento flexíveis para nossos clientes,
            permitindo o controle e a gestão eficiente de suas operações
            logísticas.
          </p>
        </S.Card>
        <S.Card>
          <S.Imagem src={custodia} alt="FlexEnvios Custódia" />
          <h2>FlexEnvios Custódia</h2>
          <p>
            Serviços especializados de custódia centralizada ou descentralizada,
            manuseio de cartões, montagem de kits, teste de equipamentos e
            configurações de POS, utilizando tecnologia de Big Data e Machine
            Learning para aprimorar a segurança e o desempenho dos processos
            logísticos.
          </p>
        </S.Card>
        <S.Card>
          <S.Imagem src={servicos} alt="Serviços Especiais" />
          <h2>Serviços Especiais</h2>
          <p>
            Captura de fotos no local de sucesso ou insucesso de entregas,
            atendimento omnichannel e backoffice premium integrado, além de
            prevenção à fraude com fotos em casos de retenção de objetos por
            aquisições fraudulentas.
          </p>
        </S.Card>
      </S.CardContainer>
    </S.Container>
  )
}

export default Servicos
