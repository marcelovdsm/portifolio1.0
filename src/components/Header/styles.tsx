import styled from 'styled-components'

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  height: 5.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

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
      color: ${(props) => props.theme.blue};
      font-size: 1.9rem;
    }
  }
`

export const NavComponent = styled.nav`
  ul {
    display: flex;
    gap: 5rem;
  }
`
