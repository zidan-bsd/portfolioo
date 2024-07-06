import { Link, useLocation } from "react-router-dom";
import Header from "../../layout/header/Header";

const WebsiteView = () => {
  const location = useLocation();
  const { state } = location;
  const data = state?.data;

  const convertNewlinesToBreaks = (text: string) => {
    return text
      .replace(/\n/g, "<br />")
      .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  };

  return (
    <div>
      <Header />
      <div className="pt-6 pb-12 px-12 max-640:px-4">
        <Link to="/portfolio">
          <div className="fixed top-4 left-12 flex bg-light-bgClr shadow-custom-8 px-6 h-10 items-center rounded-full cursor-pointer max-640:left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            <p className="text-light-FontClr max-510:hidden">{data.name}</p>
          </div>
        </Link>
        <div className="mt-20">
          {data && (
            <div className="text-light-FontClr grid grid-cols-2 gap-x-10 max-1024:grid-cols-1">
              <div className="max-1024:mx-auto">
                <img
                  className="shadow-custom-8 rounded-xl"
                  src={data.imageCover}
                  alt=""
                />
              </div>
              <div className="max-1024:mt-6">
                <Link to={data.link} target="_blank">
                  <p className="font-bold text-2xl">{data.name}</p>
                </Link>
                <Link to={data.link} target="_blank">
                  <div className="mt-3 flex items-center text-sm">
                    <p className="text-light-AccentPink mr-1">{data.link}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 stroke-light-AccentPink"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </Link>
                <Link to={data.githubLink} target="_blank">
                  <div className="mt-3 flex items-center text-sm">
                    <p className="text-light-AccentPink mr-1">
                      {data.githubLink}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 stroke-light-AccentPink"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </Link>
                <p
                  className="text-light-gray text-sm mt-3"
                  dangerouslySetInnerHTML={
                    {
                      __html: convertNewlinesToBreaks(data.description),
                    } as { __html: string }
                  }
                ></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteView;
