import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/routine">Routine</Link>
        </li>
        <li>
          <Link to="/reflection">Reflection</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  top: 5px;
  z-index: 3;
  padding: 1em;

  @media screen and (max-width: 768px) {
    background-color: ${(p) => p.theme.colors.lightGrey};
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.darkGrey};
    padding: 1em 2em;
    transition: 300ms;
    transition-delay: 100ms;

    &:hover {
      background-color: ${(p) => p.theme.colors.lightGrey};
      border-radius: 10em;
    }
  }

  ul {
    display: flex;

    li {
      list-style: none;
      font-weight: 700;
      font-size: clamp(0.5em, 3vw, 1.125em);
    }
  }
`

export default Navbar
