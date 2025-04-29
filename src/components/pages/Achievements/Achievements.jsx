import React from "react";

import AchievementItem from "./AchievementItem";
import MLCertiImage from "../../../images/achievements/ml-certif2.png";
import MBICertiImage from "../../../images/achievements/mbi_certif.png";
import ResearchImage from "../../../images/achievements/research-paper.jpg";
import FareportalGSFAImage from "../../../images/achievements/fareportal-gsfa.png";
import FareportalIncredImage from "../../../images/achievements/fareportal-incred.jpg";

const achievementsData = [
  {
    id: 1,
    type: "Certification",
    title: "Machine Learning Certification by Techexplica",
    description:
      "Recognized for mastering machine learning fundamentals, showcasing my expertise in predictive modeling and algorithm optimization.",
    image: MLCertiImage,
    link: "https://drive.google.com/file/d/12Tw0OxRMiV_9lFVfLKGX4sehCDEJrUXM/view?usp=sharing",
  },
  {
    id: 2,
    type: "Certification",
    title: "Microsoft Certified Power BI Data Analyst Associate",
    description:
      "Showcasing my ability to create impactful data-driven dashboards in Power BI and derive actionable insights through data visualization.",
    image: MBICertiImage,
    link: "https://learn.microsoft.com/api/credentials/share/en-us/LokeshAggarwal-4718/C3F6E6C8FFA46EF6?sharingId=EC03C57E960976B9",
  },
  {
    id: 3,
    type: "Accomplishment",
    title: "Research Paper on HADER Methodology",
    description:
      "Highlighted teamwork and research skills by devising a novel facial emotion recognition approach, improving classification accuracy.",
    image: ResearchImage,
    link: "https://www.tandfonline.com/doi/abs/10.1080/02522667.2020.1802122",
  },
  {
    id: 4,
    type: "Accomplishment",
    title: "Fareportal Incredibles 2021 Award",
    description:
      "Awarded for optimizing `Fareportal Dash` dashboard to enhance efficiency, demonstrating analytical and problem-solving skills.",
    image: FareportalIncredImage,
    link: "https://drive.google.com/file/d/1s5UrCLquX4ZcvC6frLm2PYx7ibbCFO-G/view?usp=sharing",
  },
  {
    id: 5,
    type: "Accomplishment",
    title: "Fareportal Get Set Fly Award",
    description:
      "Recognized for delivering new features in `Fareportal Dash` that provided significant FTE benefits, showcasing project execution and value delivery.",
    image: FareportalGSFAImage,
    link: "https://drive.google.com/file/d/14ZDYv74iUIqTE2oQFCv-3mQd2h-xZcyU/view?usp=sharing",
  },
];

const Achievements = () => {
  return (
    <section className="pb-10">
      <div className="md:mx-8 mt-8">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
          Certifications
        </h2>
        <div className="flex flex-wrap">
          {achievementsData
            .filter((item) => item.type === "Certification")
            .map((achievement) => (
              <AchievementItem achievement={achievement} key={achievement.id} />
            ))}
        </div>
        <h2 className="mt-8 text-2xl text-center font-semibold text-gray-800 mt-10 mb-6">
          Accomplishments
        </h2>
        <div className="flex flex-wrap">
          {achievementsData
            .filter((item) => item.type === "Accomplishment")
            .map((achievement) => (
              <AchievementItem achievement={achievement} key={achievement.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
