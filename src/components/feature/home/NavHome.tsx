import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavHome = () => {
  return (
    <div className="flex flex-col">
      <div className="text-light-FontClr flex flex-col items-center max-1029:flex-row">
        <img
          src="https://raw.githubusercontent.com/zidan-bsd/assets-resource/main/me/me.png"
          alt="profil"
          className="w-32 rounded-full"
        />
        <div className="mt-4 max-1029:ml-5">
          <p className="font-bold spacing tracking-wider">ZIDAN HARYANTO</p>
          <p className="mt-2 font-medium">Web Developer</p>
          <p className="mt-2 font-medium">Graphic Designer</p>
        </div>
      </div>
      <div
        className="bg-light-FontClr mx-3 my-6 max-1029:hidden"
        style={{ height: "1px" }}
      ></div>
      <div className="flex flex-col gap-y-2 pl-3 text-light-FontClr max-1029:grid max-1029:grid-cols-2 max-1029:mt-5 max-480:grid-cols-1">
        <p>📫 zidan.career@gmail.com</p>
        <p>🤙 +62 882-2519-5163</p>
        <p>🎉 October 31, 2000</p>
        <p>📍 Pemalang, Central Java</p>
      </div>
      <div className="flex mt-8 justify-around max-1029:justify-start max-1029:gap-x-10 max-1029:ml-7">
        <Link to="https://www.instagram.com/zeedx_s/" target="_blank">
          <FaInstagram style={{ scale: "1.7" }} />
        </Link>
        <Link to="https://github.com/zidan-bsd" target="_blank">
          <FaGithub style={{ scale: "1.7" }} />
        </Link>
        <Link to="https://www.linkedin.com/in/zidan-haryanto/" target="_blank">
          <FaLinkedinIn style={{ scale: "1.7" }} />
        </Link>
      </div>
      <div
        className="bg-light-FontClr mx-3 my-6 hidden max-1029:block"
        style={{ height: "1px" }}
      ></div>
    </div>
  );
};

export default NavHome;
