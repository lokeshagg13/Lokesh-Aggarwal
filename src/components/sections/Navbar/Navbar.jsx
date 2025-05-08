import React, { useState } from "react";
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
    component: <About />,
  },
  {
    id: 2,
    title: "Services",
    component: <Service />,
  },
  {
    id: 3,
    title: "Education",
    component: <Education />,
  },
  {
    id: 4,
    title: "Work Experience",
    component: <WorkExperience />,
  },
  {
    id: 5,
    title: "Portfolio",
    component: <Portfolio />,
  },
  {
    id: 6,
    title: "Achievements",
    component: <Achievements />,
  },
  {
    id: 7,
    title: "Contact",
    component: <Contact />,
  },
];

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(navbarData[0].title); // Default to "About"

  const renderPage = () => {
    const currentNavItem = navbarData.find((item) => item.title === currentPage);
    return currentNavItem ? currentNavItem.component : <About />;
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el) => (
            <li className="m-3 lg:mx-5" key={el.id}>
              <button
                className={`${
                  currentPage === el.title
                    ? "text-purple-600 text-medium hover:text-purple-800 cursor-pointer"
                    : "text-gray-800 text-medium hover:text-purple-600 cursor-pointer"
                }`}
                onClick={() => setCurrentPage(el.title)}
              >
                {el.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dynamic Page Rendering */}
      <div>{renderPage()}</div>
    </>
  );
};

export default Navbar;
