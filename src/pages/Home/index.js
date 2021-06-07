import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

//Images
import heroBg from "../../Assets/images/hero-bg.png"

// Components
import Button from "../../components/Button"

const index = () => {
  return (
    <StyledHeroWrapper className="wrapper">
      <StyledMainCol className="col-left">
        <div className="heading">
          <StyledCoHeading>
            Athletic Portfolio Physical Education
          </StyledCoHeading>
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
    margin: 2em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .buttons {
      padding: 4em 0;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledMainCol = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const StyledCoHeading = styled.h3`
  font-size: clamp(3em, 8vw, 4em);
  max-width: 8ch;
  color: ${(p) => p.theme.colors.darkGrey};
  line-height: 1.2;
  position: relative;
  z-index: 1;

  &::after {
    content: "Dylan Reed's";
    z-index: 10;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.lightGrey};
    background-color: ${(p) => p.theme.colors.mainWhite};
    position: absolute;
    top: -1.25em;
    left: 0;
    white-space: nowrap;
    font-size: clamp(1.225em, 6vw, 5em);
  }

  &::before {
    content: "PP40";
    position: absolute;
    bottom: -0.5em;
    right: 1.5em;
    z-index: -1;
    color: ${(p) => p.theme.colors.lightGrey};
    font-size: clamp(1.225em, 6vw, 5em);
  }

  @media only screen and (min-width: 768px) {
    margin-top: 3em;
    font-size: 5em;
  }
`

const StyledColRight = styled.section`
  background-image: ${(p) => `url(${p.heroBg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.5;
  flex: 1;
  z-index: 0;
`

export default index
