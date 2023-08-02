import React from 'react'
import { Link } from 'react-router-dom'
import { MenuIconsOpen, Navbar } from './styles'
import { List } from 'phosphor-react'

const Sidebar: React.FunctionComponent = () => {
  return (
    <>
      <Navbar>
        <MenuIconsOpen to="#">
          <List size={35} weight="bold" />
        </MenuIconsOpen>
      </Navbar>
    </>
  )
}
export default Sidebar
