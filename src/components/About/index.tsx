import photo from '../../assets/marcelo-photo.png'
import {
  AboutContainer,
  AboutDivComponent,
  AboutText,
  TechIcons,
} from './styles'
import { IconCss3 } from '../IconComponents/CssIcon'
import { IconHtml5 } from '../IconComponents/HtmlIcon'
import { IconTypescript } from '../IconComponents/TypescriptIcon'
import { IconReact } from '../IconComponents/ReactIcon'

export const About = () => {
  return (
    <AboutContainer>
      <AboutDivComponent>
        <img src={photo} alt="Minha foto de perfil" />
        <AboutText>
          <h1>Sobre mim</h1>
          <p id="about">
            Eu sou um desenvolvedor front-end junior apaixonado por criar
            experiências incríveis na web. Apesar de não ter experiência formal,
            tenho habilidades sólidas em HTML, CSS e TypeScript, e trabalho com
            Styled Components e React.js. Tenho trabalhado em alguns projetos
            pessoais e freelances, buscando desafios para me aprimorar. Sou bom
            em resolver problemas e estou sempre buscando aprender mais.
            Adoraria participar de projetos interessantes e continuar crescendo
            como desenvolvedor. Se quiser bater um papo, meu e-mail é
            marcelovictorsm077@gmail.com.
          </p>
        </AboutText>
      </AboutDivComponent>
      <TechIcons>
        <IconCss3 width={32} height={32} />
        <IconHtml5 width={32} height={32} />
        <IconTypescript width={26} height={26} />
        <IconReact width={36} height={36} />
      </TechIcons>
    </AboutContainer>
  )
}
