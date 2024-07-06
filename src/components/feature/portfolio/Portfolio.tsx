import React, { useState } from "react";
import Website from "./Website";
import Design from "./Design";

const Portfolio = () => {
  const [tab, setTab] = useState(true);

  const handleTabActive = () => {
    setTab(true);
  };

  const handleTabNotActive = () => {
    setTab(false);
  };

  return (
    <div className="pt-6 pb-12 px-12 max-640:px-4">
      <div>
        <p className="max-640:hidden text-light-FontClr">Zidan / Portfolio</p>
      </div>
      <div className="mt-20">
        <p className="font-bold text-xl">Project</p>
        <div className="flex mt-3">
          <p
            className={`cursor-pointer px-3 py-1 ${
              tab ? "border-b-2 border-light-FontClr font-medium" : ""
            }`}
            mr-3
            onClick={handleTabActive}
          >
            🌐 Website
          </p>
          <p
            className={`cursor-pointer px-3 py-1 ${
              tab ? "" : "border-b-2 border-light-FontClr font-medium"
            }`}
            onClick={handleTabNotActive}
          >
            🎨 Design Graphic
          </p>
        </div>
        <div className="mt-6">{tab ? <Website /> : <Design />}</div>
      </div>
    </div>
  );
};

export default Portfolio;
