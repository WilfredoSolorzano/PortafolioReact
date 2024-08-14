import React from 'react'
import { Card, LinkBotao } from './style'
import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

const Projeto = () => (
  <div>
    <Card>
      <Titulo>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJs</Paragrafo>
      <LinkBotao>visualizar</LinkBotao>
    </Card>
  </div>
)

export default Projeto
