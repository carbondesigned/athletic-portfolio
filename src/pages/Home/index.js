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
        <MainHeading>Dylan Reed's</MainHeading>
        <StyledCoHeading>Athletic Portfolio Physical Education</StyledCoHeading>
        <div className="buttons">
          <Button primary className="main-cta">
            View Portfolio
          </Button>
          <Button className="routine-cta">My Routine</Button>
        </div>
      </StyledMainCol>
      <StyledColRight heroBg={heroBg} className="col-right">
        <Link className="equipment-cta">My Equipment</Link>
      </StyledColRight>
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

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledMainCol = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainHeading = styled.h1`
  font-size: clamp(2em, 10vw, 6em);
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.lightGrey};
  background-color: ${(p) => p.theme.colors.mainWhite};
  z-index: 5;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 600px;
    left: 150px;
    padding: 5px;
  }
`

const StyledCoHeading = styled.h3`
  font-size: clamp(2em, 8vw, 4em);
  max-width: 8em;
  color: ${(p) => p.theme.colors.darkGrey};
  padding: 0 2em 0.5em;
  line-height: 1.2;

  @media only screen and (min-width: 768px) {
    margin-top: 3em;
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
