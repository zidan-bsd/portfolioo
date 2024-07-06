import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  RequestCloseFromNavigation: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  RequestCloseFromNavigation,
}) => {
  return (
    <div className="bg-light-bgBlur fixed top-0 right-0 bottom-0 left-0 px-10 py-10 backdrop-blur-sm z-10">
      <div className="bg-light-bgClr shadow-custom-3 px-6 py-6 rounded-md text-light-FontClr">
        <div className="flex justify-between items-center">
          <p className="font-bold">Navigation</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            onClick={RequestCloseFromNavigation}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="text-sm mt-6 flex flex-col gap-y-4">
          <li>
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
              🏠 Home
            </NavLink>
          </li>
          <li>
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
              📖 Resume
            </NavLink>
          </li>
          <li>
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
              🏅 Certificate
            </NavLink>
          </li>
          <li>
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
              💻 Portfolio
            </NavLink>
          </li>
          <li>
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
              📨 Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
