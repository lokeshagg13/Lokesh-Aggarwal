import React, { useState } from "react";
import Navbar from "./components/sections/Navbar/Navbar";
import ProfileCover from "./components/sections/ProfileCover/ProfileCover";
import Sidebar from "./components/sections/Sidebar/Sidebar";
import Footer from "./components/sections/Footer/Footer";
import About from "./components/pages/About/About";
import Education from "./components/pages/Education/Education";
import WorkExperience from "./components/pages/WorkExperience/WorkExperience";
import Achievements from "./components/pages/Achievements/Achievements";
import Contact from "./components/pages/Contact/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Service from "./components/pages/Service/Service";

const navbarData = [
  { id: 1, title: "About", component: <About /> },
  { id: 2, title: "Services", component: <Service /> },
  { id: 3, title: "Education", component: <Education /> },
  { id: 4, title: "Work Experience", component: <WorkExperience /> },
  { id: 5, title: "Portfolio", component: <Portfolio /> },
  { id: 6, title: "Achievements", component: <Achievements /> },
  { id: 7, title: "Contact", component: <Contact /> },
];

function App() {
  const [currentPage, setCurrentPage] = useState(navbarData[0].title); // default to "About"

  const currentNavItem = navbarData.find((item) => item.title === currentPage);

  return (
    <main className="min-h-screen relative bg-gray-50 pb-10">
      <ProfileCover setCurrentPage={setCurrentPage} />
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Sidebar setCurrentPage={setCurrentPage}/>
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              navbarData={navbarData}
            />
            <div>{currentNavItem?.component}</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
