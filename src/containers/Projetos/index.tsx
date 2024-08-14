import React from 'react'
import Titulo from '../../components/Titulo'
import Projeto from '../../components/Projeto'
import { Lista } from './styles'

const Projectos = () => (
  <section>
    <Titulo fontSize={16}>projetos</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projectos
