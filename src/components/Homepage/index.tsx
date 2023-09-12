import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5'
import { SiCss3 } from '@react-icons/all-files/si/SiCss3'
import { HomepageDiv, IconsComponent } from './styles'

export const Homepage = () => {
  return (
    <HomepageDiv>
      <h2>Desenvolvedor Front end</h2>
      <p>React | Typescript | Styled-Components</p>
      <IconsComponent>
        <FaReact />
        <SiTypescript />
        <SiJavascript />
        <SiHtml5 />
        <SiCss3 />
      </IconsComponent>
    </HomepageDiv>
  )
}
