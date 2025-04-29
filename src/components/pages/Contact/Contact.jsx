import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section className="pb-10">
      <div className="p-8 md:mx-8 bg-white rounded-md shadow-md">
        <h3 className="text-2xl text-gray-800 font-bold mb-6">
          Contact Information
        </h3>
        <div className="flex items-center mb-4">
          <FaPhone />
          <span className="text-gray-700 text-lg ml-4">+91-8860750963</span>
        </div>
        <div className="flex items-center">
          <MdEmail />
          <span className="text-gray-700 text-lg ml-4">
            lokesh.kaggarwal1397@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
