import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataWebsite, { WebData } from "../../../datas/DataWebsite";

const Website = () => {
  const [dataWebsite, setDataWebsite] = useState<WebData[]>([]);

  useEffect(() => {
    setDataWebsite(DataWebsite);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-10 max-1024:grid-cols-3 max-768:grid-cols-2 max-640:gap-5 max-480:grid-cols-1">
      {dataWebsite.map((data, index) => (
        <Link
          key={index}
          to={`/portfolio/website/${data.name}`}
          state={{ data }}
        >
          <div className="bg-light-bgClr shadow-custom-3 rounded-lg text-light-FontClr cursor-pointer">
            <img src={data.imageCover} alt="" />
            <div className="p-3">
              <p className="font-bold">{data.name}</p>
              <div className="flex mt-3 gap-x-5">
                <p className="bg-light-AccentLightBlue text-sm font-medium px-1">
                  {data.buildf}
                </p>
                <p className="bg-light-AccentLightPurple text-sm font-medium px-1">
                  {data.buildt}
                </p>
              </div>
              <p className="bg-light-AccentLightOrange inline-block text-sm font-medium px-1 mt-2">
                {data.buildl}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Website;
