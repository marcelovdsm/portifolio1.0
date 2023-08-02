import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './styles'

const Sidebar: React.FunctionComponent = () => {
  return (
    <>
      <Navbar>
        <MenuIconOpen to="#">
          <FaIcons.FaBars />
        </MenuIconOpen>
      </Navbar>
    </>
  )
}
export default Sidebar
