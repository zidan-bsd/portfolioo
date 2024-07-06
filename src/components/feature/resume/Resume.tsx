import React from "react";
import Me from "../../../assets/me.png";
import ListCertificates from "../../../datas/DataCertificate";

const Resume = () => {
  const linkCv =
    "https://drive.google.com/file/d/1Gd1fcv3sRR-UZI2RjgAhL_uQD5NxHSIj/view?usp=sharing";

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = linkCv;
    a.target = "_blank";
    a.download = "ZIDAN HARYANTO.pdf"; // Nama file yang akan diunduh
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="pt-6 pb-12 px-12 max-640:px-4">
      <div>
        <p className="max-640:hidden text-light-FontClr">Zidan / Resume</p>
      </div>
      <div className="text-light-FontClr mt-20 px-20 max-1024:px-10 max-768:px-0">
        <div>
          <button
            onClick={handleDownload}
            className="bg-white rounded-xl shadow-custom-8 px-4 py-2 text-light-AccentPink font-medium"
          >
            Download CV
          </button>
        </div>
        <div className="flex justify-between mt-16 items-center max-640:flex-col">
          <div className="relative">
            <div
              className="bg-light-FontClr h-14 rounded-full absolute -top-16 left-3"
              style={{ width: "2px" }}
            ></div>
            <div
              className="bg-light-FontClr h-14 absolute -bottom-10 left-3 rounded-full"
              style={{ width: "2px" }}
            ></div>
            <p className="text-2xl tracking-widest font-medium mt-4">ZIDAN</p>
            <p className="text-4xl tracking-widest font-bold mb-2">HARYANTO</p>
            <div className="flex ml-40 max-1024:ml-20 max-768:ml-10">
              <p className="font-medium">Web Developer</p>
              <p className="mx-2 font-medium">|</p>
              <p className="font-medium">Graphic Designer</p>
            </div>
          </div>
          <div className="max-640:order-first">
            <img className="w-52 rounded-full" src={Me} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6 gap-x-10 max-1024:grid-cols-4 max-768:grid-cols-1 max-640:mt-12">
          <div className="col-span-1 max-1024:col-span-2">
            <p className="font-bold text-lg tracking-widest mb-2">CONTACT</p>
            <div className="flex ml-2 flex-col gap-y-2 text-light-gray text-sm">
              <p className="">🤙 +62 882-2519-5163</p>
              <p>📍 Pemalang, Central Java</p>
              <p>📫 zidan.career@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2 max-1024:col-span-2 max-768:mt-6">
            <p className="font-bold text-lg tracking-widest mb-2">PROFILE</p>
            <p className="text-light-gray text-sm leading-5 ml-2">
              &nbsp;&nbsp;&nbsp;&nbsp;I am a creative Graphic Designer and Web
              Developer. I have had skills in graphic design and web development
              for 3 years, and I combine the two to create engaging and high
              performance digital solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6 gap-x-10 max-1024:grid-cols-4 max-768:grid-cols-1">
          <div className="col-span-1 max-1024:col-span-2">
            <div>
              <p className="font-bold text-lg tracking-widest mb-2">
                ACHIEVEMENT
              </p>
              <ul className="">
                {ListCertificates.map((data, index) => (
                  <li className="text-sm mb-2 ml-1" key={index}>
                    <p className="font-bold">{data.title}</p>
                    <div className="flex flex-col">
                      <p className="text-light-gray ml-5">
                        &nbsp;&nbsp;&nbsp;&nbsp;{data.from}
                      </p>{" "}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 ml-5 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                          />
                        </svg>
                        <p className="font-medium ml-1">{data.date}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <p className="font-bold text-lg tracking-widest mb-2">
                EDUCATION
              </p>
              <p className="font-bold text-sm ml-1">motorcycle engineering</p>
              <p className="text-light-gray text-sm ml-2">
                🎓 SMK Syafi’iyah Bantarbolang - 2017/2018
              </p>
            </div>
          </div>
          <div className="text-sm col-span-2 max-1024:col-span-2 max-768:mt-6">
            <div>
              <p className="font-bold text-lg tracking-widest mb-2">
                EXPERIENCE
              </p>
              <div>
                <p className="font-bold text-sm">Freelance Graphic Designer</p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p className="font-medium ml-2">March 2023 - present</p>
                </div>
                <ul className="text-light-gray ml-4 flex flex-col gap-y-1">
                  <li>
                    •&nbsp;&nbsp; Created logo, website, banners, and other
                    promotional content.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Create innovative design packages to elevate
                    and differentiate branding and marketing and advertising
                    initiatives.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Meet with client to determine marketing and
                    design vision, scopes of work, budget, and deliverable
                    timeframes.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Designed new, on-brand visual elements
                    focusing on messaging and brand.
                  </li>
                </ul>
              </div>
              <div className="mt-2">
                <p className="font-bold">Freelace Web Developer</p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p className="font-medium ml-2">march 2023 - present</p>
                </div>
                <ul className="text-light-gray ml-4 flex flex-col gap-y-1">
                  <li>
                    •&nbsp;&nbsp; Developed websites from backend to frontend
                    using ReactJs, ExpressJs and MySQL.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Collaborated with clients to determine project
                    scope and requirements.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Designing, Developing, and Modifying websites.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Worked on API intergration and developed
                    functionality for systems using APIs.
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <p className="font-bold">
                  CTO / one of the founders of Toonesia.id
                </p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p className="font-medium ml-2">
                    December 2020 - February 2023
                  </p>
                </div>
                <ul className="text-light-gray ml-4 flex flex-col gap-y-1">
                  <li>
                    •&nbsp;&nbsp; Design and develop products or technology
                    platforms that are in line with the company's vision and
                    mission.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Engage in market and technology research to
                    understand new trends and opportunities.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Monitor technology trends and ensure that the
                    company is always using the newest and most relevant
                    technology.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Interact with product teams to understand user
                    and market needs.
                  </li>
                  <li>
                    •&nbsp;&nbsp; Determine product features based on customer
                    feedback and competitor analysis.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-bold text-lg tracking-widest">SKILLS</p>
              <p className="text-light-gray text-sm mt-2 font-medium mb-1 ml-1">
                •&nbsp;&nbsp; HTML
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; CSS ( SCSS, Tailwind ){" "}
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; JavaScript ( ReactJs, NodeJs,ExpressJs ){" "}
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; MySQL{" "}
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; Git/Github{" "}
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; Graphic Design, UI/UX
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; Branding Guidelines{" "}
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; Problem Solving
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; Team Work, Individual Work
              </p>
              <p className="text-light-gray text-sm font-medium mb-1 ml-1">
                •&nbsp;&nbsp; Adobe Photoshop, Illustrator, Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
