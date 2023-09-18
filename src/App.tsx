import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Projects } from './components/Projects'

const projectsList = [
  {
    img: ,
    title: ,
    description:
  }
  {
    img: ,
    title: ,
    description:
  }
  {
    img: ,
    title: ,
    description:
  }
  {
    img: ,
    title: ,
    description:
  }
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
