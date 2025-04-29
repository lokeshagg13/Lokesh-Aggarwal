import React from "react";

import WorkExperienceItem from "./WorkExperienceItem";
import MonashImage from "../../../images/logos/monash-uni-logo.svg";
import FareportalImage from "../../../images/logos/fareportal-logo.jpg";

const workExperienceData = [
  {
    id: 1,
    role: "Summer Research Intern",
    company: "Monash University, Melbourne, Australia",
    duration: "Dec 2023 - Mar 2024",
    points: [
      "➢ Implemented advanced Machine Learning algorithms to Game Theory applications in self-defense sports.",
      "➢ Orchestrated new features using Game Theory’s payoff matrix calculation frameworks, improving F1 Score by 10%.",
      "➢ Applied ensemble techniques and neural networks, enhancing fight outcome prediction accuracy by 15%.",
    ],
    image: MonashImage,
  },
  {
    id: 2,
    role: "Data Analyst",
    company: "Fareportal India Pvt. Ltd., Gurugram, Haryana, India",
    duration: "Oct 2020 - Jun 2022",
    points: [
      "➢ Maintained the data-driven 'Fareportal Dash' dashboard.",
      "➢ Performed preprocessing and wrangling of complex data formats, increasing dashboard efficiency by 10%.",
      "➢ Optimized database querying, reducing report load time by more than 50%.",
    ],
    image: FareportalImage,
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Fareportal India Pvt. Ltd., Gurugram, Haryana, India",
    duration: "Apr 2020 - Sep 2020",
    points: [
      "➢ Developed and maintained automation scripts for compliance testing with a benefit of 2 FTE.",
      "➢ Worked with automation testing frameworks like Selenium with Python, cutting testing time by 40%.",
    ],
    image: FareportalImage,
  },
];

const WorkExperience = () => {
  return (
    <section className="pb-10">
      <div className="w-90 md:mx-8">
        {workExperienceData.map((experience) => (
          <WorkExperienceItem experience={experience} key={experience.id} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
