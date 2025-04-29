import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "SQL (PostgreSQL, MySQL)",
    percentage: "98%",
  },
  {
    id: 2,
    title: "Python (Scikit-learn, Pandas, NumPy, SciPy)",
    percentage: "95%",
  },
  {
    id: 3,
    title: "R",
    percentage: "90%",
  },
  {
    id: 4,
    title: "Supervised Learning (Regression, Classification)",
    percentage: "90%",
  },
  {
    id: 5,
    title: "Neural Networks (CNN, RNN, LSTM)",
    percentage: "85%",
  },
  {
    id: 6,
    title: "Unsupervised Learning (Clustering, PCA, EM)",
    percentage: "75%",
  },
  {
    id: 7,
    title: "Random Forests, XGBoost",
    percentage: "80%",
  },
  {
    id: 8,
    title: "Hyperparameter Tuning",
    percentage: "80%",
  },
  {
    id: 9,
    title: "Feature Engineering",
    percentage: "75%",
  },
  {
    id: 10,
    title: "Tensorflow, Keras, PyTorch",
    percentage: "75%",
  },
  {
    id: 11,
    title: "Transformers (BERT, GPT-2, T5)",
    percentage: "80%",
  },
  {
    id: 12,
    title: "Fine-tuning (Hugging Face)",
    percentage: "70%",
  },
  {
    id: 13,
    title: "Azure Databricks, Azure ML",
    percentage: "75%",
  },
  {
    id: 14,
    title: "LangChain, LLMs",
    percentage: "60%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
