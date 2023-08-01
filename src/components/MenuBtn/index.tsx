import { List } from 'phosphor-react'
import { Btn } from './styles'
import { useState, useEffect } from 'react'

export const MenuBtn = () => {
  const HandleMenuExpand = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(() => {
      const onClick = (e) => {
        if (el.current !== null && !el.current.contains(e.target)) {
          setIsActive(!isActive)
        }
      }

      if (isActive) {
        window.addEventListener('click', onClick)
      }
{
      return () => {
        window.removeEventListener("click", onClick)
      }
    }, [isActive, el])

    return [isActive, setIsActive]
  }

  return (
    <Btn onClick={() => {}}>
      <List size={35} weight="bold" />
    </Btn>
  )
}
