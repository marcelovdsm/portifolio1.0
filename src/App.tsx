import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { About } from './components/About'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Homepage />
      <About />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
