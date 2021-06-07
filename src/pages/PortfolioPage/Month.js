import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "../../components/Button"

const Month = ({ month, cover }) => {
  return (
    <StyledMonth cover={cover}>
      <Link>
        <img
          src={cover}
          alt="a showcase of athletic work `${month}`"
          className="cover"
        />
      </Link>
      <div className="info">
        <h2> {month} </h2>
        <Button primary>View Month</Button>
      </div>
    </StyledMonth>
  )
}

const StyledMonth = styled.div`
  width: fit-content;

  img {
    max-width: 100%;
    border-radius: 1em;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1em;

    h2 {
      text-transform: uppercase;
      color: ${(p) => p.theme.colors.darkGrey};
    }
  }
`

export default Month
