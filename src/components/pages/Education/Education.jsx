import React from "react";

import EducationItem from "./EducationItem";
import MonashImage from "../../../images/logos/monash-uni-logo.svg";
import GGSIPUImage from "../../../images/logos/ggsip-uni-logo.png";

const educationData = [
  {
    id: 1,
    degree: "Master of Data Science",
    institution: "Monash University, Melbourne, Australia",
    duration: "July 2022 - Sep 2024",
    gpa: "GPA: 3.8/4",
    image: MonashImage,
  },
  {
    id: 2,
    degree: "B.Tech. (Computer Science)",
    institution: "GGSIP University, Delhi, India",
    duration: "Aug 2016 - Jun 2020",
    gpa: "GPA: 9.2/10",
    image: GGSIPUImage,
  },
];

const Education = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {educationData.map((education) => (
          <EducationItem education={education} key={education.id} />
        ))}
      </div>
    </section>
  );
};

export default Education;
