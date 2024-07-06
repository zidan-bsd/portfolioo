import React, { useEffect, useState } from "react";
import ListCertificates, {
  Certification,
} from "../../../datas/DataCertificate";
import CertificateView from "./CertificateView";

const Certificate = () => {
  const [dataCertificate, setDataCertificate] = useState<Certification[]>([]);
  const [selectDataSertificate, setSelectDataCertificate] =
    useState<Certification | null>(null);
  const [certificateViewVisible, setSertificateViewVisible] = useState(false);

  const handleItemClick = (certificate: Certification) => {
    setSelectDataCertificate(certificate);
    setSertificateViewVisible(true);
  };

  const handleCloseModal = () => {
    setSertificateViewVisible(false);
    setSelectDataCertificate(null);
  };

  useEffect(() => {
    setDataCertificate(ListCertificates);
  }, []);

  return (
    <div className="pt-6 pb-12 px-12 max-640:px-4">
      {certificateViewVisible && (
        <CertificateView
          RequestCloseFromView={handleCloseModal}
          dataCertificate={selectDataSertificate}
          isViewOpen={certificateViewVisible}
        />
      )}
      <div>
        <p className="text-light-FontClr max-640:hidden ">
          Zidan / Certificate
        </p>
      </div>
      <div className="mt-20 text-light-FontClr">
        <p className="font-bold text-xl">Certificate 📖</p>
        <div className="grid grid-cols-4 gap-10 mt-6 max-1024:grid-cols-3 max-768:grid-cols-2 max-640:gap-5">
          {dataCertificate.map((data, index) => (
            <div
              className="bg-light-bgClr shadow-custom-3 rounded-md cursor-pointer"
              key={index}
              onClick={(e) => handleItemClick(data)}
            >
              <div className="relative">
                <img
                  className="rounded-tl-md rounded-tr-md"
                  src={data.img}
                  alt="certificate"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="stroke-light-FontClr size-6 absolute top-4 right-4 bg-light-bgClr rounded-md w-8 h-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div className="p-4 max-1024:p-2">
                <p className="font-medium line-clamp-2 max-h-12 min-h-12">
                  {data.title}
                </p>
                <p className="text-sm text-light-gray my-4 min-h-10 max-h-10">
                  {data.from}
                </p>
                <div className="min-h-8 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p className="text-sm font-medium">{data.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
