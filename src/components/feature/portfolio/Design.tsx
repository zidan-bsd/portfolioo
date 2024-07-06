import React, { useEffect, useState } from "react";
import PortfolioDesign, { DesignData } from "../../../datas/DataDesign";
import ModalDesign from "./ModalDesign";

const Design = () => {
  const [dataDesign, setDataDesign] = useState<DesignData[]>([]);
  const [selectedData, setSelectedData] = useState<DesignData | null>(null);
  const [designVisibility, setDesignVisibility] = useState(false);

  const handleItemClick = (design: DesignData) => {
    setSelectedData(design);
    setDesignVisibility(true);
  };

  const handleCloseModdal = () => {
    setDesignVisibility(false);
    setSelectedData(null);
  };

  useEffect(() => {
    setDataDesign(PortfolioDesign);
  }, []);

  return (
    <div
      className="grid grid-cols-5 gap-10 max-1024:grid-cols-3 max-640:gap-5 max-578:grid-cols-2
    max-480:grid-cols-1"
    >
      {designVisibility && (
        <ModalDesign
          RequestCloseFromView={handleCloseModdal}
          dataDesign={selectedData}
          isViewOpen={designVisibility}
        />
      )}
      {dataDesign.map((data, index) => (
        <div
          key={index}
          className="bg-light-bgClr shadow-custom-3 rounded-lg text-light-FontClr cursor-pointer"
          onClick={(e) => handleItemClick(data)}
        >
          <img className="rounded-tl-lg h-28 mx-auto" src={data.img} alt="" />
          <div className="p-3">
            <p className="font-bold text-nowrap overflow-hidden text-ellipsis">
              {data.name}
            </p>
            <div className="relative text-sm mt-3">
              <p className="absolute bottom-0 right-0 bg-light-AccentLightBlue">
                {data.for}
              </p>
              <p>{data.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Design;
