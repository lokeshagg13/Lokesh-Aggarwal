import React, { useState } from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "SQL (MySQL, PostgreSQL) + NoSQL",
    percentage: "90%",
    sub: [
      {
        id: 1,
        title: "MySQL",
        percentage: "95%",
      },
      {
        id: 2,
        title: "PostgreSQL",
        percentage: "90%",
      },
      {
        id: 3,
        title: "MongoDB",
        percentage: "90%",
      },
    ],
  },
  {
    id: 2,
    title: "Python (Scikit-learn, Pandas, NumPy, SciPy)",
    percentage: "85%",
    sub: [
      {
        id: 1,
        title: "Python Programming",
        percentage: "95%",
      },
      {
        id: 2,
        title: "Data Wrangling & Analysis using Pandas",
        percentage: "90%",
      },
      {
        id: 3,
        title: "Scikit-Learn",
        percentage: "80%",
      },
      {
        id: 4,
        title: "Numpy",
        percentage: "80%",
      },
      {
        id: 5,
        title: "SciPy",
        percentage: "65%",
      },
    ],
  },
  {
    id: 3,
    title: "Big Data Analytics",
    percentage: "80%",
    sub: [
      {
        id: 1,
        title: "PySpark",
        percentage: "80%",
      },
      {
        id: 2,
        title: "Azure Databricks",
        percentage: "80%",
      },
      {
        id: 3,
        title: "GCP BigQuery",
        percentage: "70%",
      },
    ],
  },
  {
    id: 4,
    title: "Microsoft SQL Server & Azure",
    percentage: "80%",
    sub: [
      {
        id: 1,
        title: "Microsoft SQL Server",
        percentage: "95%",
      },
      {
        id: 2,
        title: "Azure Fundamentals",
        percentage: "80%",
      },
      {
        id: 3,
        title: "Azure ML",
        percentage: "65%",
      },
      {
        id: 4,
        title: "Azure AI",
        percentage: "65%",
      },
      {
        id: 5,
        title: "Azure Databricks",
        percentage: "80%",
      },
    ],
  },
  {
    id: 5,
    title: "Google Cloud Platform",
    percentage: "75%",
    sub: [
      {
        id: 1,
        title: "GCP Compute and Storage Fundamentals",
        percentage: "80%",
      },
      {
        id: 2,
        title: "GCP BigQuery",
        percentage: "70%",
      }
    ],
  },
  {
    id: 6,
    title: "Machine Learning & Deep Learning Algorithms",
    percentage: "87%",
    sub: [
      {
        id: 1,
        title: "Statistics and Mathematics of ML & DL",
        percentage: "90%",
      },
      {
        id: 2,
        title: "Ensembling Techniques like Random Forests, XGBoost",
        percentage: "90%",
      },
      {
        id: 3,
        title: "Hyperparameter Tuning",
        percentage: "80%",
      },
    ],
  },
  {
    id: 7,
    title: "Predictive Analysis",
    percentage: "75%",
  },
  {
    id: 8,
    title: "Data Visualization (Tableau, Power BI)",
    percentage: "83%",
    sub: [
      {
        id: 1,
        title: "Power BI",
        percentage: "90%",
      },
      {
        id: 2,
        title: "Tableau",
        percentage: "75%",
      },
    ],
  },
  {
    id: 9,
    title: "Natural Language Processing",
    percentage: "80%",
  },
  {
    id: 10,
    title: "Feature Engineering",
    percentage: "75%",
  },
  {
    id: 11,
    title: "Tensorflow, Keras, PyTorch",
    percentage: "75%",
    sub: [
      {
        id: 1,
        title: "Tensorflow and Keras",
        percentage: "80%",
      },
      {
        id: 2,
        title: "PyTorch",
        percentage: "80%",
      },
    ],
  },
  {
    id: 12,
    title: "Hugging Face Transformers Library",
    percentage: "70%",
  },
  {
    id: 13,
    title: "Transformers, LangChain, LLMs, RAG",
    percentage: "70%",
    sub: [
      {
        id: 1,
        title: "Understanding of Transformers (BERT, GPT-2, T5)",
        percentage: "75%",
      },
      {
        id: 2,
        title: "LLMs",
        percentage: "75%",
      },
      {
        id: 3,
        title: "LangChain",
        percentage: "70%",
      },
      {
        id: 4,
        title: "RAG",
        percentage: "60%",
      },
    ],
  },
  {
    id: 14,
    title: "R programming",
    percentage: "65%",
  },
];

const Skills = () => {
  const [activeExpansions, setActivExpansions] = useState(
    Array(skillData.length).fill(false)
  );

  const expandSkill = (idx) => {
    hideAllSkills();
    setActivExpansions((prevExpansions) => {
      const newExpansions = [...prevExpansions];
      newExpansions[idx] = true;
      return newExpansions;
    });
  };

  const hideAllSkills = () => {
    setActivExpansions(Array(skillData.length).fill(false));
  };

  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem
            key={id}
            id={id}
            skill={skill}
            active={activeExpansions[id]}
            onExpand={expandSkill}
            onHide={hideAllSkills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
