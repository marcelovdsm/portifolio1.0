import styled from 'styled-components'

export const HeaderDiv = styled.div`
  position: static;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  height: 5.5rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  gap: 45rem;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.gray};
    border-bottom: solid 2px ${(props) => props.theme.blue};
    transition: 0.2s;

    span {
      transition: 0.2s;
    }
  }

  h1:hover {
    border-bottom-width: 3px;

    span {
      color: ${(props) => props.theme.blue};
    }
  }
`

export const NavComponent = styled.nav`
  ul {
    display: flex;
    gap: 5rem;
  }

  li {
    list-style: none;

    a {
      color: ${(props) => props.theme.gray};
      transition: 0.2s;
      font-size: 1.2rem;
    }

    a:hover {
      color: ${(props) => props.theme.blue};
    }
  }
`
