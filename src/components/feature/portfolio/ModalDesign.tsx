import React from "react";
import { DesignData } from "../../../datas/DataDesign";

interface DesignViewProps {
  RequestCloseFromView: () => void;
  isViewOpen: boolean;
  dataDesign: DesignData | null;
}

const ModalDesign: React.FC<DesignViewProps> = ({
  RequestCloseFromView,
  dataDesign,
  isViewOpen,
}) => {
  if (!isViewOpen || !dataDesign) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center bg-light-bgBlur z-10 backdrop-blur-sm">
      <div className="bg-light-bgClr w-[500px] mx-auto p-4 rounded-lg shadow-custom-3 max-510:w-full">
        <div className="flex justify-between mb-2">
          <p className="font-bold text-xl">Design</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={RequestCloseFromView}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <img
          className="max-h-80 mx-auto"
          src={dataDesign.img}
          alt="certificate"
        />
      </div>
    </div>
  );
};

export default ModalDesign;
