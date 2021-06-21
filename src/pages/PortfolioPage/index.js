import React from "react"
import styled from "styled-components"
import Month from "./Month"

//Covers
import bicepCurl from "./img/april/bics.png"
import shoulderRaises from "./img/may/shoulder-raises.png"
import singleDumbellCurl from "./img/june/singleDumbellCurl.png"

const index = () => {
  return (
    <StyledPortfolio>
      <div className="header">
        <h1>My Portfolio</h1>
      </div>

      <div className="intro">
        <h2>Intro</h2>
        <p>
          My three goals were very based on the near future, and to be honest
          was cool to see where I've come since then. I mentioned hitting a
          desired 20 Ibs weight loss goal by September. I also mentioned about
          my web development progress in which I wanted to learn a programming
          language, JavaScript to then begin working and have clients. Finally,
          I mentioned that for an overall improvement in productivity based
          habits, such as early mornings to have plenty of time before the day
          actually starts, workout routine, learning programming, etc.
        </p>
        <p>
          Even though I have not thought about this goals in a while
          specifically, I have subconsciously I feel like have been on track
          with them. I have surpassed my goal with learning the language, and
          also smashed my productive mornings, and waking up at 6:00 each day,
          as opposed to 7:00 - 8:00 I mentioned originally. This morning routine
          has made me more in-tune with my sleep which have recently became
          aware is very important to know that about yourself.
        </p>
      </div>

      <div className="months">
        <Month src={bicepCurl} title={"April"} path={"/portfolio/april"} />
        <Month src={shoulderRaises} title={"May"} path={"/portfolio/may"} />
        <Month
          src={singleDumbellCurl}
          title={"June"}
          path={"/portfolio/june"}
        />
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

  .intro {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5em;

    p {
      padding: 2em 0;
      max-width: 100ch;
      line-height: 2;
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
