import styled from 'styled-components'

export const AboutDivComponent = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 1rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 15px;

  img {
    width: 5rem;
    border-radius: 99px;
    box-shadow: -3.5px 2px ${(props) => props.theme.blue};
  }
`

export const AboutText = styled.div``
