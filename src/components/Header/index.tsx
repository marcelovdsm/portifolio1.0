import { List } from 'phosphor-react'
import { HeaderNav, MenuBtn } from './styles'

export const Header = () => {
  return (
    <HeaderNav>
      <MenuBtn>
        <List size={35} weight="bold" />
      </MenuBtn>
      <a href="/">
        <h1>
          <span>M</span>ARCELO <span>V</span>ICTOR
        </h1>
      </a>
    </HeaderNav>
  )
}
