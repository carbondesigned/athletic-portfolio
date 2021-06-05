import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = ({ children, primary }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>
}

const StyledButton = styled(Link)`
  padding: 1em 2em;
  background-color: ${(p) => (p.primary ? "#D31027" : "transparent")};
  color: ${(p) => (p.primary ? "white" : "#D31027")};
  border-radius: ${(p) => (p.primary ? "10em" : "0")};
  text-decoration: none;
`

export default Button
