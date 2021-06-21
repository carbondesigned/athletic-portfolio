import React from "react"
import styled from "styled-components"

const Week = ({ month, weekTitle, weekDesc }) => {
  return (
    <>
      {month && (
        <div className="div">
          <StyledDesc className="desc">
            <h4 className="week">{weekTitle}</h4>
            <p>{weekDesc}</p>
          </StyledDesc>
        </div>
      )}
    </>
  )
}

const StyledDesc = styled.section`
  padding: 2em 0;

  h4 {
    font-size: 3em;
    color: ${(p) => p.theme.colors.lightGrey};
    text-transform: uppercase;
    font-size: clamp(2.525em, 3vw, 4.525em);
  }

  p {
    line-height: 1.5;
    max-width: 125ch;
    font-size: clamp(1.025em, 3vw, 1.15em);
  }
`

export default Week
