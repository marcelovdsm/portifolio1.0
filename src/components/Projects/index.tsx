import { ProjectComponent } from './styles'

interface ProjectProps {
  img: string
  title: string
  description: string
}

export const Projects = ({ img, title, description }: ProjectProps) => {
  return (
    <ProjectComponent>
      <img src={img} alt="Imagem do projeto" />
      <h1>{title}</h1>
      <p>{description}</p>
    </ProjectComponent>
  )
}
