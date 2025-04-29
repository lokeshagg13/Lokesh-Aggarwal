import React from "react";

import Resume from "../../../updated-resume/CV.pdf";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 0,
    icon: <FaGithub />,
    link: "https://github.com/lokeshagg13",
  },
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/lokesh-aggarwal-2b770315a/",
  },
  {
    id: 2,
    icon: <SiHuggingface />,
    link: "https://huggingface.co/lkaggarwal1997",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-32 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="lokesh-aggarwal" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">
          Lokesh Aggarwal
        </h1>
        <p className="text-sm text-gray-400 mb-3">
          Data Science Graduate | Delivering Innovative Data-Driven Solutions
        </p>
        <a
          href={Resume}
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="CV.pdf"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Dedicated Data Scientist with a master’s in data science from Monash
          University and 2+ years of experience in machine learning, deep
          learning, time series analytics, and big data processing (Python,
          PySpark, and Databricks). Passionate about developing predictive
          models, mastering emerging technologies like Large Language Models
          (LLMs), and delivering impactful, data-driven solutions.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
