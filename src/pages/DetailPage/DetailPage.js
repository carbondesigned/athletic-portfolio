import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

import { MonthState } from "../PortfolioPage/monthState"
import Week from "./Week"

const DetailPage = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [months, setMonths] = useState(MonthState)
  const [month, setMonth] = useState(null)

  useEffect(() => {
    const currentMonth = months.filter((stateMonth) => stateMonth.url === url)
    setMonth(currentMonth[0])
  }, [months, url])

  return (
    <>
      {month && (
        <StyledWeeks>
          <StyledHeading className="headline">
            <h3>Month</h3>
            <h2>{month.title}</h2>
          </StyledHeading>

          <Week
            month={month}
            weekTitle={month.weeks.w1.title}
            weekDesc={month.weeks.w1.desc}
          />

          <Week
            month={month}
            weekTitle={month.weeks.w2.title}
            weekDesc={month.weeks.w2.desc}
          />
          <Week
            month={month}
            weekTitle={month.weeks.w3.title}
            weekDesc={month.weeks.w3.desc}
          />
          <Week
            month={month}
            weekTitle={month.weeks.w4.title}
            weekDesc={month.weeks.w4.desc}
          />
          <StyledGallery>
            {month.gallery.map((img) => (
              <>
                <Img src={img.cover1} />
                <Img src={img.cover2} />
                <Img src={img.cover3} />
                <Img src={img.cover4} />
              </>
            ))}
          </StyledGallery>
        </StyledWeeks>
      )}
    </>
  )
}

const Img = ({ src }) => {
  return <img src={src} alt="" />
}

const StyledWeeks = styled.section`
  min-height: 100vh;
  padding: 2em;
`

const StyledHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4em 2em;

  h2 {
    font-size: clamp(3em, 3vw, 4em);
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.darkGrey};
  }

  h3 {
    color: ${(p) => p.theme.colors.lightGrey};
    text-transform: uppercase;
  }
`

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 2em;

  img {
    max-width: 100%;
  }
`

export default DetailPage
