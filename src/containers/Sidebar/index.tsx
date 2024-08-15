import React from 'react'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Wilfredo Solorzano</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        WilfredoSolorzano
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full Stack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
