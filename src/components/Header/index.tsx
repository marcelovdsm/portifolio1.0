import { HeaderDiv, NavComponent } from './styles'

export const Header = () => {
  return (
    <HeaderDiv>
      <a href="/">
        <h1>
          <span>M</span>ARCELO <span>V</span>ICTOR
        </h1>
      </a>
      <NavComponent>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="/projetos">Projetos</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </NavComponent>
    </HeaderDiv>
  )
}
