import React from "react"
import styled from "styled-components"
import Title from "../components/Title"

const Reflection = () => {
  return (
    <StyledSection>
      <div className="header">
        <Title>My Reflection</Title>
      </div>
      <div className="content">
        <p>
          I really enjoyed taking advantage of the time during this course to
          complete my routine of working out. I have found a lot of success and
          overcoming some barriers which will help for the rest of my athletic
          life, as I plan to have fitness in my life for a long time. At the
          start it was very motivating to begin my routine once again after
          taking a break for the majority of my quad just before this last one,
          because I decided it was best to focus on my English course. Though,
          for some reason it became hard to find motivation to either even start
          a workout or to push myself to put max effort in a set. This barrier
          fell into around the middle of the quadmester, though I have
          successfully overcame it by the end, so I finished with good terms
          with my routine and motivation. I have set a goal of reaching a
          desirable weight, and though, I have seen improvements losing a little
          over 5 pounds, I have not hit my desired 180Ibs in total. Which I will
          continue to grind for, for Halloween a due date for myself. By pushing
          myself as I have been for the past month or so, I have no doubt that I
          will hit it. Thank you Mr. Lanspeary for a more entertaining and
          interesting class.
        </p>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 10em 1em;
  width: 100%;

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    width: 100%;
    display: grid;
    place-items: center;
    padding: 5em;

    p {
      max-width: 100ch;
      font-size: clamp(1.025em, 3vw, 1.15em);
      line-height: 2;
    }
  }
`

export default Reflection
