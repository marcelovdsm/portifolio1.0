import styled from 'styled-components'

export const AboutDivComponent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 15px;
  width: 70vw;
  height: 7.5rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 99px;
    box-shadow: -3.5px 2px ${(props) => props.theme.blue};
  }
`

export const AboutText = styled.div`
  color: ${(props) => props.theme.latte};
  max-width: 60vw;

  h2 {
    color: ${(props) => props.theme.latte};
    text-shadow: 2px 2px 2px ${(props) => props.theme.blue};
    margin-bottom: 0.3rem;
  }
`
