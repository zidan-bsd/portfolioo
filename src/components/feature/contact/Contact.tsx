import React from "react";
import contact from "../../../assets/contact.png";

const Contact = () => {
  const convertNewlinesToBreaks = (text: any) => {
    return text.split("\n").join("<br />");
  };

  return (
    <div className="pt-6 pb-12 px-12 max-640:px-4">
      <div>
        <p className="max-640:hidden text-light-FontClr">Zidan / Contact</p>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-x-10 max-640:grid-cols-1">
        <div className="text-light-FontClr max-640:mt-3">
          <p className="font-medium">Want to give me a message?</p>
          <p className="font-bold text-3xl my-6">📩 Get In Touch</p>
          <p className="text-light-gray mb-12">
            If you're interested to maximize your and your team's efficiency,
            send us a message to get started.
          </p>
          <a
            href={`mailto:zidan.career@gmail.com`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="bg-light-AccentLightPurple px-6 py-2 font-bold rounded-md"
          >
            Mail Me
          </a>
        </div>
        <div className="max-640:order-first max-640:mx-auto">
          <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
