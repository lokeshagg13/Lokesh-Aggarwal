import React from "react";

const Navbar = ({ currentPage, setCurrentPage, navbarData }) => {
  return (
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
  );
};

export default Navbar;
