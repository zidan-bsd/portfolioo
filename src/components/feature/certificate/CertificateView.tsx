import React from "react";
import { Certification } from "../../../datas/DataCertificate";

interface CertificateViewProps {
  RequestCloseFromView: () => void;
  isViewOpen: boolean;
  dataCertificate: Certification | null;
}

const CertificateView: React.FC<CertificateViewProps> = ({
  RequestCloseFromView,
  dataCertificate,
  isViewOpen,
}) => {
  if (!isViewOpen || !dataCertificate) return null;

  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col justify-center bottom-0 bg-light-bgBlur z-10 backdrop-blur-sm">
      <div className="bg-light-bgClr mx-auto p-4 w-[500px] rounded-lg shadow-custom-3 max-510:w-full">
        <div className="flex justify-between mb-2">
          <p className="font-bold text-xl">Certificate</p>
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
        <img src={dataCertificate.img} alt="certificate" />
      </div>
    </div>
  );
};

export default CertificateView;
