import React from 'react'
import EstiloGlobal from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projectos from './containers/Projetos'
import { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projectos />
        </main>
      </Container>
    </>
  )
}

export default App
