import React from "react"
import styled from "styled-components"

const Title = ({ children }) => {
  return (
    <StyledTitle>
      <h1>{children}</h1>
      <h4>PP40</h4>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  font-size: clamp(1.5em, 6vw, 4.725em);
  font-weight: 500;
  position: relative;
  z-index: 1;
  max-width: 18ch;

  h4 {
    color: ${(p) => p.theme.colors.lightGrey};
    font-size: clamp(3em, 6vw, 2.5em);
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
`

export default Title
