//Images
import bicepCurl from "./img/april/bics.png"

//Month 1 gallery
import tricepExtension from "./img/april/trics.png"
import shrug from "./img/april/shoulders.png"
import shrugs2 from "./img/april/shrugs2.png"
import dips from "./img/april/dips.png"

//Month2 gallery
import shoulderRaises from "./img/may/shoulder-raises.png"
import tricepRaises from "./img/may/tricep-extentions.png"
import facePulls from "./img/may/face-pulls.png"

// June gallery
import singleDumbellCurl from "./img/june/singleDumbellCurl.png"

export const MonthState = () => {
  return [
    {
      title: "April",
      url: "/portfolio/april",
      gallery: [
        {
          cover1: tricepExtension,
          cover2: shrug,
          cover3: shrugs2,
          cover4: dips,
        },
      ],
      weeks: {
        w1: {
          title: "Week 01",
          desc:
            "It was easy getting started with my routine, though it had been a while since I was sticking with the schedule due to my English class that was keeping me from continuing the routine. It was difficult finding the best way to submit evidence through the resources I had at the time.",
        },
        w2: {
          title: "",
          desc:
            "I also feel like stating that I did stick to the same routine, a few days switched, or skipped. Maybe even adding a exercise or two just to try some new things out.",
        },
        w3: {
          title: "",
          desc: "",
        },
        w4: {
          title: "",
          desc: "",
        },
      },
    },
    {
      title: "May",
      url: "/portfolio/may",
      gallery: [
        {
          cover1: shoulderRaises,
          cover2: tricepRaises,
          cover3: facePulls,
          cover4: dips,
        },
      ],
      weeks: {
        w1: {
          title: "Week 01",
          desc:
            "By the the first week of May I felt like I had the routine back down and was continuing my routine. Many days though I remember at this point were sometimes hard to get going. I also noticed that I needed to change at this point, from realizing that I took to many lazy sets. So, I made a deal with my self to not take any more lazy sets anymore, only full effort.",
        },
        w2: {
          title: "Week 02",
          desc:
            "A bit ironic, but I remember this week being a 'lazyish' week, even though I did complete the workouts. The workouts just seemed very draining and unproductive.",
        },
        w3: {
          title: "Week 03",
          desc:
            "This week was the first week log, in which I felt good once I finally checked and completed all the plans I had for the week. My first weekly goal was to not miss and or have any lazy workouts, from what you can tell was what I was struggling with at the time.",
        },
        w4: {
          title: "Week 04",
          desc:
            "The week goal was again about motivation and to push myself. In which, I did completed my goal and at the same time I raised the weight of my bicep curls, overhead shoulder press, dumbbell flat bench press (chest) and back pull downs.",
        },
      },
    },
    {
      title: "June",
      url: "/portfolio/june",
      gallery: [
        {
          cover1: singleDumbellCurl,
          cover2: shrug,
          cover3: shrugs2,
          cover4: dips,
        },
      ],
      weeks: {
        w1: {
          title: "Week 01",
          desc:
            "From the start of June, this month has been the hardest I've worked out. The first week, I planed to do a warmup before every work out which proved to be very advantageous. I also felt like I finally broke the rough feeling when trying to start a workout, and became super motivated to begin working out each day. I did this by simply  seeing improvements in my body, and productivity, rewards.",
        },
        w2: {
          title: "Week 02",
          desc:
            "This week and following after the weather became really almost perfect. So, I spent a lot of time outside as I planned my goal in the weekly log this week. As well as following last week, my goals stayed consistent on keep in track like I have been. ",
        },
        w3: {
          title: "Week 03",
          desc:
            "This week had continuously good weather so, I helped my parents with transforming our front garden. I began work immediately second period class. So, my day would look like this: finish first meeting of Gym, then workout, shower, join my second period course, once that was completed I'd head out and start moving rocks from our front garden to our back yard behind the shed with a wheel barrow.",
        },
        w4: {
          title: "Week 04",
          desc:
            "This week I continued my motivated plan, but as well as a more relaxed plan. I continued my workouts frequently, though my mind was relaxed as I realized that it was the end of the year soon.",
        },
      },
    },
  ]
}
