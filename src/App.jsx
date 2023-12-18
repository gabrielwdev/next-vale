import Header from './assets/components/Header.jsx'
import Main from './assets/components/Main.jsx'
import Solucoes from './assets/components/Stn_solucoes.jsx'
import Quem_somos from './assets/components/Stn_quem_somos.jsx'
import Mais_sobre from './assets/components/Stn_mais_sobre.jsx'
import Certificados from './assets/components/Stn_certificados.jsx'
import Cabeamento from './assets/components/Stn_cabeamento.jsx'
import Projetos from './assets/components/Stn_projetos.jsx'
import Footer from './assets/components/Footer.jsx'

import "./sass/App.sass"

function App() {
  return (
    <>
        <Header />
        <Main />
        <Solucoes />
        <Quem_somos />
        <Mais_sobre />
        <Certificados />
        <Cabeamento />
        <Projetos />
        <Footer />
    </>
  )
}

export default App
