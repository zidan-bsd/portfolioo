import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../navbar/Navigation";

const Header = () => {
  const [Navigation, setNavigation] = useState(false);

  const toggleNavigation = () => {
    setNavigation(!Navigation);
  };

  return (
    <header className="flex justify-end px-12 py-4 absolute top-0 left-0 right-0 max-640:px-4">
      <div>
        <div className="text-sm text-light-FontClr gap-x-5 bg-light-bgClr px-6 h-10 flex items-center rounded-full shadow-custom-8 max-768:hidden">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-light-AccentPink font-bold"
                : "cursor-pointer hover:text-light-AccentPink"
            }
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-light-AccentPink font-bold"
                : "cursor-pointer hover:text-light-AccentPink"
            }
          >
            <p>Resume</p>
          </NavLink>
          <NavLink
            to="/certificate"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-light-AccentPink font-bold"
                : "cursor-pointer hover:text-light-AccentPink"
            }
          >
            <p>Certificate</p>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-light-AccentPink font-bold"
                : "cursor-pointer hover:text-light-AccentPink"
            }
          >
            <p>Portfolio</p>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-light-AccentPink font-bold"
                : "cursor-pointer hover:text-light-AccentPink"
            }
          >
            <p>Contact</p>
          </NavLink>
        </div>
        <div
          className=" bg-light-bgClr shadow-custom-8 w-28 justify-center items-center py-2 rounded-xl hover:text-light-AccentPink hover:stroke-light-AccentPink group cursor-pointer hidden max-768:flex"
          onClick={toggleNavigation}
        >
          <p className="mr-1 group-hover:text-light-AccentPink text-sm font-medium">
            Menu
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 group-hover:stroke-light-AccentPink"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {Navigation && <Nav RequestCloseFromNavigation={toggleNavigation} />}
      </div>
    </header>
  );
};

export default Header;
