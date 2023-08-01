import { styled } from 'styled-components'

export const Btn = styled.button`
  background: none;
  color: ${(props) => props.theme.gray};
  border: none;
  position: absolute;
  left: 2%;

  :hover {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
    transition: 0.2s;
  }
`
