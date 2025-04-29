import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3 text-justify">
              I am <strong>Lokesh Aggarwal</strong>, a data science professional
              based in <strong>Delhi, India</strong>, with a {" "}
              <strong>Master’s degree in Data Science</strong> from Monash
              University. With over {" "}
              <strong>two years of experience in the data field</strong>, my
              journey spans roles in software engineering, data analytics, and
              machine learning. My academic background, coupled with hands-on
              work experience, has equipped me with the ability to process
              complex datasets and develop solutions that drive measurable
              outcomes.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3 text-justify">
              My expertise includes <strong>Python programming</strong>,{" "}
              <strong>machine learning algorithms</strong>, and {" "}
              <strong>deep learning frameworks</strong> like TensorFlow and
              Keras. I’ve worked on impactful projects such as
              <em>facial emotion recognition</em> and{" "}
              <em>customer churn prediction</em>, where I applied advanced
              techniques like{" "}
              <strong>transfer learning</strong> and{" "}
              <strong>ensemble modeling</strong>. Passionate about leveraging
              emerging technologies, especially{" "}
              <strong>Large Language Models (LLMs)</strong>, I strive to stay
              ahead in the ever-evolving world of AI.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
