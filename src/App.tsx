import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div></div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
