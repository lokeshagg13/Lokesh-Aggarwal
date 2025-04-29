import React, { useState } from "react";

const WorkExperienceItem = ({ experience }) => {
  const { role, company, duration, points, image } = experience;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full my-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <div className="border-1 p-4">
            <img
              src={image}
              alt={company}
              className="w-24 h-24 rounded-full mr-4"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 mb-1">{role}</h3>
            <p className="text-gray-600 mb-1">{company}</p>
            <p className="text-gray-400">{duration}</p>
          </div>
        </div>
        <div>
          <span
            className={`transform transition-transform ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>
      </div>
      {expanded && (
        <ul className="mt-4 pl-4 list-disc">
          {points.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperienceItem;
