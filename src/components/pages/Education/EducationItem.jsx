import React from "react";

const EducationItem = ({ education }) => {
  const { degree, institution, duration, gpa, image } = education;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-32 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={institution}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{degree}</h3>
        <p className="text-gray-600 mb-1">{institution}</p>
        <p className="text-gray-400 mb-1">{duration}</p>
        <p className="text-gray-500 font-medium">{gpa}</p>
      </div>
    </div>
  );
};

export default EducationItem;
