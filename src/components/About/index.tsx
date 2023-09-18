import photo from '../../assets/marcelo-photo.png'
import { AboutDivComponent, AboutText } from './styles'

export const About = () => {
  return (
    <AboutDivComponent>
      <img src={photo} alt="Minha foto de perfil" />
      <AboutText>
        <h2>Sobre mim</h2>
        <p id="about">
          Sou um estudante de análise e desenvolvimento de sistemas e deselvolvo
          utilizando React, Typescript e Styled Components mas tenho muita
          disposição para aprender novas linguagens e procuro aperfeiçoar cada
          vez mais os meus conhecimentos.
        </p>
      </AboutText>
    </AboutDivComponent>
  )
}
