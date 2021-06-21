import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

//Images
import heroBg from "../../Assets/images/hero-bg.png"

// Components
import Button from "../../components/Button"
import StyledTitle from "../../components/Title"

const index = () => {
  return (
    <StyledHeroWrapper className="wrapper">
      <StyledMainCol className="col-left">
        <div className="heading">
          <div>
            <h2>Dylan Reed's</h2>
            <StyledTitle>Athletic Portfolio Physical Education</StyledTitle>
          </div>
          <div className="buttons">
            <Button to="/portfolio" primary className="main-cta">
              View Portfolio
            </Button>
            <Button to="/routine" className="routine-cta">
              My Routine
            </Button>
          </div>
        </div>
      </StyledMainCol>
      <StyledColRight heroBg={heroBg} className="col-right"></StyledColRight>
    </StyledHeroWrapper>
  )
}

const StyledHeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background: ${(p) => p.theme.colors.mainWhite};
  flex-direction: column-reverse;
  position: relative;
  text-align: left;

  .heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;

    h2 {
      font-size: clamp(3em, 8vw, 6.125em);
      text-transform: uppercase;
      font-weight: 700;
      color: ${(p) => p.theme.colors.lightGrey};
      width: 100%;
    }

    .buttons {
      padding: 2em;
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .buttons {
      display: flex;
      justify-content: center;
      align-self: center;
    }
  }
`

const StyledMainCol = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-left: 5em; */
  /* justify-content: center; */

  width: 100%;
  height: 100%;
`

const StyledColRight = styled.section`
  background-image: ${(p) => `url(${p.heroBg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.5;
  flex: 1;
  z-index: 0;
  width: 100%;
`

export default index
