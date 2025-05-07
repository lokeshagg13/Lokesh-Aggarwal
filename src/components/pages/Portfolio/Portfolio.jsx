import React from "react";
import BookRecommenderImage from "../../../images/portfolio/book-recommender.png";
import SmartWorldImage from "../../../images/portfolio/smart-world.png";
import ManasVaniImage from "../../../images/portfolio/manas-vani.png";
import Sun360Image from "../../../images/portfolio/sun360.png";
import CustomerChurnImage from "../../../images/portfolio/customer-churn.png";

import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: BookRecommenderImage,
    title: "Book Recommender",
    description:
      "A book recommendation system using vector search on OpenAI embeddings, built with LangChain, Chroma DB, and Python.",
    link: "https://huggingface.co/spaces/lkaggarwal1997/Book-Recommender",
    github: "https://github.com/lokeshagg13/Book-Recommender",
  },
  {
    id: 2,
    image: SmartWorldImage,
    title: "Smart World",
    description:
      "An interactive simulation platform for visualizing ecosystems with self-driven cars using neural networks and virtual sensors.",
    link: "https://smart-world-ske3.onrender.com/",
    github: "https://github.com/lokeshagg13/Smart-World",
  },
  {
    id: 3,
    image: ManasVaniImage,
    title: "Manas Vani: Ramcharitmanas Explorer",
    description:
      "A data science-powered platform to explore Ramcharitmanas using semantic search and theme-based categorization.",
    link: "https://huggingface.co/spaces/lkaggarwal1997/Manas-Vani",
    github: "https://github.com/lokeshagg13/Ramcharitmanas-Text-Analysis",
  },
  {
    id: 4,
    image: Sun360Image,
    title: "Sun360: UV Hazard Awareness",
    description:
      "An app designed to safeguard individuals in Victoria, Australia, from harmful UV rays and provide UV Index and UV awareness.",
    link: "https://sun360.onrender.com/",
    github: "https://github.com/lokeshagg13/sun360",
  },
  {
    id: 5,
    image: CustomerChurnImage,
    title: "Customer Churn Prediction",
    description:
      "A machine learning project to predict customer churn using advanced feature engineering, SMOTE, and Random Forests.",
    link: "https://github.com/lokeshagg13/Customer-Churn-Predictor/blob/main/Project%20Report.pdfhttps://drive.google.com/file/d/1Aub1U_9TUgmkUPpXQV5Sozj-vG1NVzIz/view?usp=drive_link",
    github: "https://github.com/lokeshagg13/Customer-Churn-Predictor",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
