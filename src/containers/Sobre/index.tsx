import React from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubtSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      accusamus illum porro voluptatem dolor aliquam accusantium est saepe,
      beatae, ex cumque tenetur minus. Qui numquam iste saepe vero excepturi
      error.
    </Paragrafo>
    <GithubtSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=WilfredoSolorzano&show_icons=true&theme=dracula"
        alt="GitHub Stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=WilfredoSolorzano&layout=compact&langs_count=7&theme=dracula"
        alt="Top Languages"
      />
    </GithubtSecao>
  </section>
)

export default Sobre
