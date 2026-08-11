import amarelo from '../../assets/amarelo.jpg'
import riscoamarelo from '../../assets/riscoamarelo.jpg'
import riscoazul from '../../assets/riscoazul.png'
import * as S from './styles'

const Sobre = () => {
  return (
    <S.Container>
      {/* {' '}
      //container do componente */}
      <S.Banner>
        {/* {' '}
        //banner e titulo */}
        <S.Titulos>
          {' '}
          {/*Titulos*/}
          <h1>Conheça a FlexEnvios</h1>
          <h3>Soluções simples e inteligentes</h3>
        </S.Titulos>
        <img src={amarelo} alt="Parte em amarelo no banner" />
      </S.Banner>
      <S.BannerRisco>
        {/* {' '}
        //banner 2 */}
        <img src={riscoamarelo} alt="Risco em amarelo" />
        <p>
          Com uma equipe de mais de <span>100</span> colaboradores a FlexEnvios
          é hoje uma logtech focada no mercado de e-commerce, bancário, fintechs
          com prestação de serviço em <span>todo o mercado nacional</span>.
        </p>
        <img src={riscoazul} alt="Risco em azul" />
      </S.BannerRisco>
      <S.ContainerCardOrigem>
        {/* {' '}
        //container do card */}
        <div>
          {/* {' '}
          //card */}
          <h2>Nossa origem</h2>
          <S.Motivos>
            <h3>Há 2 anos fazendo história!</h3>
            <h3>Motivos para você fazer parte dessa história também</h3>
          </S.Motivos>
        </div>
      </S.ContainerCardOrigem>
      <div>
        {/* {' '}
        //container dos cards */}
        <div>
          {/* {' '}
          //card 1 */}
          <h3>Origem dos Fundadores:</h3>
          <p>
            A experiência dos fundadores em setores como cartões de crédito,
            farmacêutica e e-commerce moldou a abordagem única da FLEXENVIOS no
            setor logístico.
          </p>
        </div>
        <div>
          {/* {' '}
          //card 2 */}
          <h3>Inovação Baseada na Jornada do Cliente:</h3>
          <p>
            A FLEXENVIOS constrói suas soluções logísticas a partir das
            necessidades dos clientes, proporcionando experiências
            personalizadas e resoluções além do tradicional.
          </p>
        </div>
        <div>
          {/* {' '}
          //card 3 */}
          <h3>Excelência no Atendimento ao Cliente:</h3>
          <p>
            A busca constante por inovação e excelência nos serviços é um
            diferencial da FLEXENVIOS, que se posiciona como uma LogTech
            disruptiva no mercado.
          </p>
        </div>
        <div>
          {/* {' '}
          //card 4 */}
          <h3>Foco em Atendimento e BackOffice Premium:</h3>
          <p>
            A FLEXENVIOS entende que, além de infraestrutura e tecnologia, um
            atendimento e suporte de alta qualidade são fundamentais para o
            sucesso logístico.
          </p>
        </div>
        <div>
          {/* {' '}
          //card 5 */}
          <h3>Governança e Segurança como Pilares da LogTech:</h3>
          <p>
            A empresa coloca ênfase em governança, segurança e controles,
            características essenciais que foram trazidas das experiências dos
            fundadores em grandes corporações.
          </p>
        </div>
      </div>
    </S.Container>
  )
}

export default Sobre
