import { List } from 'phosphor-react'
import { HeaderDiv, MenuBtn } from './styles'

export const Header = () => {
  return (
    <HeaderDiv>
      <nav>
        <ul>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/projetos">Projetos</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
      <a href="/">
        <h1>
          <span>M</span>ARCELO <span>V</span>ICTOR
        </h1>
      </a>
    </HeaderDiv>
  )
}
