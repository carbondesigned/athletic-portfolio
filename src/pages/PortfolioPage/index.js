import React from "react"
import styled from "styled-components"
import Month from "./Month"

//months
import { month1 } from "./portfolioData"

const index = () => {
  return (
    <StyledPortfolio>
      <div className="header">
        <h1>My Portfolio</h1>
      </div>

      <div className="months">
        <Month {...month1} />
        <Month {...month1} />
        <Month {...month1} />
      </div>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  width: 100%;
  padding: 2em;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 2em 0;
      font-size: clamp(3em, 6vw, 5em);
      font-weight: 700;
      text-transform: uppercase;
      color: ${(p) => p.theme.colors.darkGrey};
      position: relative;

      &:after {
        content: "PP40";
        position: absolute;
        bottom: -0.5em;
        right: 1.8em;
        z-index: -1;
        color: ${(p) => p.theme.colors.lightGrey};
        font-size: clamp(1.225em, 6vw, 5em);
      }
    }
  }

  .months {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2em;
    justify-content: center;

    @media only screen and (min-width: 1500px) {
      margin: 0 10em;
    }
  }
`

export default index
