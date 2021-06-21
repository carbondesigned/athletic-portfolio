import React from "react"
import styled from "styled-components"

const Routine = () => {
  return (
    <StyledRoutinePage>
      <div className="title">
        <h1>Daily Routine</h1>
      </div>
      <StyledRoutine className="routine">
        <div className="day">
          <h3 className="week-day">Mon. & Friday</h3>
          <h2 className="muscles">Shoulders & Legs</h2>
          <div className="exercises">
            <h4>Shoulder Routine</h4>
            <ul className="list shoulders-list">
              <li>Shoulder Press</li>
              <li>Dumbbell Standing front Raises</li>
              <li>Dumbbell High Pulls</li>
              <li>Dumbbell Bent-Over Lateral Raise & Face Pulls</li>
              <li>
                Standing Should Press, alternating neutral grip to normal at the
                top, 10x3
              </li>
              <li>Standing Side Raise Flies</li>
              <li>Shrugs</li>
            </ul>
            <h4>Leg Routine</h4>
            <ul className="list leg-list">
              <li>Leg extensions</li>
              <li>Standing Leg Curls</li>
              <li>Weighted Calf Raises</li>
              <li>Normal Squats</li>
            </ul>
          </div>
        </div>
        <div className="day">
          <h3 className="week-day">Tue. & Sat</h3>
          <h2 className="muscles">Bicep & Back</h2>
          <h4>Biceps Routine</h4>
          <ul className="list bicep-list">
            <li>Individual alternating Curls</li>
            <li>Hammer Curls</li>
            <li>EZ bar outside curls</li>
            <li>EZ bar middle backhand curls</li>
            <li>EZ bar inside curls</li>
            <li>Rope Curls</li>
          </ul>
          <h4>Back Routine</h4>
          <ul className="list back-list">
            <li>EZ bar Inside pulls</li>
            <li>EZ bar Outside Behind pulls</li>
            <li>Normal Pulldowns</li>
            <li>Dumbbell individual bent-over rows</li>
            <li>machine seated rows</li>
          </ul>
        </div>
        <div className="day">
          <h3 className="week-day">Thu. & Sun</h3>
          <h2 className="muscles">Chest & Triceps</h2>
          <h4>Chest Routine</h4>
          <ul className="list chest-list">
            <li>Dumbbell Press</li>
            <li>Incline dumbbell press</li>
            <li>Decline Dumbbell press</li>
            <li>Cable Flies</li>
            <li>Dumbbell bench Flies</li>
          </ul>
          <h4>Triceps Routine</h4>
          <ul className="list triceps-list">
            <li>Skull Crushers</li>
            <li>Single-arm Seated Overhead Pushes</li>
            <li>cable V bar push Downs</li>
            <li>Outside EZ bar push-downs</li>
            <li>Inside EZ backhand pull-downs</li>
            <li>Inside push-downs</li>
            <li>Bench Dips</li>
            <li>Bent over dumbbell Kickbacks</li>
          </ul>
        </div>
      </StyledRoutine>
    </StyledRoutinePage>
  )
}

const StyledRoutinePage = styled.section`
  margin-top: 5em;

  .title {
    width: 100%;
    text-align: center;

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
        right: 35%;
        z-index: -1;
        color: ${(p) => p.theme.colors.lightGrey};
        font-size: clamp(1.225em, 6vw, 5em);
      }
    }
  }
`

const StyledRoutine = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  gap: 1em;
  padding: 2em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .day {
    flex: 1;
    padding: 1em;
    background-color: ${(p) => p.theme.colors.mainWhite};
    border-radius: 1em;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
  }

  .list {
    padding: 1em;
  }

  .week-day {
    text-transform: uppercase;
  }

  h2 {
    padding-bottom: 1em;
  }

  h4 {
    padding: 1em 0;
  }
`

export default Routine
