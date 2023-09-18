import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Projects } from './components/Projects'

import calcjs from './assets/calcjs-picture.jpg'
import countdown from './assets/countdown-picture.jpg'
import blogts from './assets/project1ts-picture.jpg'

const projectsList = [
  {
    img: calcjs,
    title: 'CalcJs',
    description:
      'Calculadora feita em Javascript, HTML e CSS puros, um dos meus primeiros projetos.',
  },
  {
    img: countdown,
    title: 'CountDown Task Manager',
    description:
      'Um gerenciador de tarefas com contagem regressiva, histórico de tarefas e acompanhamento de status de tarefas feito em React, Typescript e StyledComponents',
  },
  {
    img: blogts,
    title: 'Blog',
    description:
      'Blog feito utililizando react, meu segundo projeto feito utilizando react',
  },
]

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Homepage />
      <About />
      <Projects />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
