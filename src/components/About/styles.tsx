import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const AboutDivComponent = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 75rem;
  align-items: center;
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 15px;
  height: 16rem;
  padding: 4rem;

  img {
    border-radius: 30px;
    border: 2px solid ${(props) => props.theme.blue};
  }
`

export const AboutText = styled.div`
  h1 {
    margin-bottom: 1.2rem;
    border-bottom: 2px solid ${(props) => props.theme.blue};
    max-width: fit-content;
  }

  p {
    line-height: 2rem;
  }
`

export const TechIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: -3rem;
  margin-top: 3rem;
  gap: 1rem;
`
