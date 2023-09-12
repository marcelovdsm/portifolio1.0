import styled from 'styled-components'

export const HomepageDiv = styled.div`
  color: ${(props) => props.theme.gray};
  width: 100%;
  height: 30rem;
  padding: 1.5rem;
  margin-top: 10rem;

  h2 {
    color: ${(props) => props.theme.blue};
    font-size: 4rem;
  }

  p {
    font-weight: bold;
    font-size: 1.6rem;
  }
`

export const IconsComponent = styled.div`
  display: flex;
  gap: 0.3rem;
  font-size: 1.2rem;
  margin-top: 0.2rem;
`
