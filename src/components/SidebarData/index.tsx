import { House, User, Browsers, Phone } from 'phosphor-react'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <House size={16} color="#5445c9" weight="bold" />,
  },
  {
    title: 'Sobre',
    path: '/sobre',
    icon: <User size={16} color="#5445c9" weight="bold" />,
  },
  {
    title: 'Projetos',
    path: '/projetos',
    icon: <Browsers size={16} color="#5445c9" weight="bold" />,
  },
  {
    title: 'Contato',
    path: '/contato',
    icon: <Phone size={16} color="#5445c9" weight="bold" />,
  },
]
