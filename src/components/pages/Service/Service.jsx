import React from "react";

import { SiTensorflow, SiLangchain } from "react-icons/si";
import { FaChartLine } from "react-icons/fa6";
import { TbTableShare } from "react-icons/tb";

import MLIcon from "../../../icons/ml-icon";
import PSIcon from "../../../icons/ps-icon";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <MLIcon />,
    title: "Machine Learning Model Development",
    description:
      "Building and deploying predictive models, including supervised and unsupervised learning, hyperparameter tuning, and feature engineering.",
  },
  {
    id: 2,
    icon: <SiTensorflow />,
    title: "Deep Learning and Natural Language Processing Solutions",
    description:
      "Designing deep learning pipelines for tasks like facial emotion recognition and customer churn analysis, leveraging frameworks like TensorFlow and Keras.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Data Visualization and Insights",
    description:
      "Creating dashboards and visualizations using tools like Tableau and Power BI to deliver actionable insights and enable data-driven decisions.",
  },
  {
    id: 4,
    icon: <PSIcon />,
    title: "Big Data Processing",
    description:
      "Processing large datasets efficiently using technologies like PySpark and Databricks, optimizing workflows, and enhancing reporting accuracy.",
  },
  {
    id: 5,
    icon: <SiLangchain />,
    title: "AI and LLM Customization",
    description:
      "Fine-tuning Large Language Models (LLMs) using LangChain and Hugging Face for specific business applications, improving accuracy and usability.",
  },
  {
    id: 6,
    icon: <TbTableShare />,
    title: "End-to-End Data Pipeline Design",
    description:
      "Developing robust ETL pipelines for seamless data wrangling, integration, and real-time updates to dashboards and databases.",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
