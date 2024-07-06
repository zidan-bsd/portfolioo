import React from "react";
import NavHome from "./NavHome";
import { FaHtml5 } from "react-icons/fa6";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitSquare,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

import coding from "../../../assets/coding.png";
import design from "../../../assets/design.png";

const Home = () => {
  const icons = [
    <FaHtml5
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <FaCss3
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <RiJavascriptFill
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <FaReact
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <BiLogoTypescript
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <FaNodeJs
      style={{ transform: "scale(2.6)" }}
      className="fill-light-FontClr"
    />,
    <FaSass style={{ transform: "scale(2)" }} className="fill-light-FontClr" />,
    <FaBootstrap
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <SiTailwindcss
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <SiExpress
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <SiMysql
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <FaGitSquare
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <FaGithub
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <FaFigma
      style={{ transform: "scale(2.8)" }}
      className="fill-light-FontClr"
    />,
    <SiAdobeillustrator
      style={{ transform: "scale(2.5)" }}
      className="fill-light-FontClr"
    />,
    <SiAdobephotoshop
      style={{ transform: "scale(2.5)" }}
      className="fill-light-FontClr"
    />,
    <SiAdobexd
      style={{ transform: "scale(2.5)" }}
      className="fill-light-FontClr"
    />,
  ];

  return (
    <div className="pt-6 pb-12 px-12 max-640:px-4">
      <div>
        <p className="max-640:hidden text-light-FontClr">Zidan / Home</p>
      </div>
      <div className="mt-20 flex max-1029:flex-col">
        <div className="flex-grow-0 flex-shrink-0 w-60 max-1029:w-full">
          <NavHome />
        </div>
        <div className="pl-16 text-light-FontClr max-1029:pl-0">
          <div>
            <p className="font-bold text-xl">Hello World 👋</p>
            <p className="mt-3 leading-6 tracking-wide">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am{" "}
              <span className="font-medium bg-light-AccentLightOrange">
                Zidan Haryanto
              </span>
              , an creative{" "}
              <span className="font-medium bg-light-AccentLightBlue">
                Graphic Designer
              </span>{" "}
              and{" "}
              <span className="font-medium bg-light-AccentLightBlue">
                Web Developer
              </span>
              . I have had skills in graphic design and web development for{" "}
              <span className="font-medium bg-light-AccentLightOrange">
                3 years
              </span>
              , and I combine the two to create engaging and high performance
              digital solutions.
            </p>
            <p className="mt-3 leading-6 tracking-wide">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I stay updated with the latest{" "}
              <span className="font-medium bg-light-AccentLightPurple">
                design trends
              </span>{" "}
              and{" "}
              <span className="font-medium bg-light-AccentLightPurple">
                technology
              </span>{" "}
              to continually improve my work. This involves exploring new tools
              and techniques to enhance my designs and functionality. Whether
              I'm collaborating with clients or working independently, my goal
              is to surpass expectations and deliver creative solutions that
              meet project objectives effectively.
            </p>
          </div>
          <div className="mt-8">
            <p className="font-bold text-xl">What I’m Doing 👩‍💻</p>
            <div className="grid grid-cols-2 gap-x-3 mt-3 max-768:grid-cols-1 max-768:gap-y-3">
              <div className="flex">
                <img className="w-16" src={coding} alt="coding" />
                <div className="ml-2">
                  <p className="font-medium">Web Development</p>
                  <p className="text-sm text-light-gray">
                    High-quality development of site at the professional level.
                  </p>
                </div>
              </div>
              <div className="flex">
                <img className="w-16" src={design} alt="design" />
                <div className="ml-2">
                  <p className="font-medium">Graphic Design</p>
                  <p className="text-sm text-light-gray">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-bold text-xl">Tools I Use 🛠</p>
            <div className="mt-6 grid grid-cols-8 gap-y-12 gap-x-6 max-640:px-3 max-480:grid-cols-6">
              {icons.map((icon, index) => (
                <div key={index} className="flex justify-center items-center">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
