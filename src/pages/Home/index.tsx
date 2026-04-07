import Benefits from '../../components/Benefits'
import Clientes from '../../components/Clientes'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Servicos from '../../components/Servicos'
// import Contact from '../../components/Contact'
// import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <Benefits />
      <Clientes />
      <Footer />
      {/*
      <Contact />
      <Footer /> */}
    </>
  )
}

export default Home
