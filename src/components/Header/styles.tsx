import styled from 'styled-components'

export const HeaderNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  display: flex;
  justify-content: center;
  padding: 1.5rem;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.gray};
    border-bottom: solid 2px ${(props) => props.theme.blue};
    transition: 0.2s;

    span {
      transition: 0.2s;
    }
  }

  h1:hover {
    border-bottom-width: 4px;

    span {
      color: ${(props) => props.theme.lightBlue};
    }
  }
`
