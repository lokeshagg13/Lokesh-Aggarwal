import React from "react";
import {
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "../../pages/About/About";
import Education from "../../pages/Education/Education";
import WorkExperience from "../../pages/WorkExperience/WorkExperience";
import Achievements from "../../pages/Achievements/Achievements";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Education",
    to: "/education",
  },
  {
    id: 4,
    title: "Work Experience",
    to: "/workexperience",
  },
  {
    id: 5,
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    id: 6,
    title: "Achievements",
    to: "/achievements",
  },
  {
    id: 7,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/services" element={<Service />} />
        <Route path="/education" element={<Education />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 text-medium hover:text-purple-800"
            : "text-gray-800 text-medium hover:text-purple-600"
        }
      >
        {title}
      </NavLink>
    </li>
  );
};
