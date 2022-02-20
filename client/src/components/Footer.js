import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-custom-gray py-5 px-3 md:p-12">
      <div className=" pb-14 md:pb-0 max-w-2xl mx-auto">
        <p className="mb-3 lg:mb-5 text-center font-bold">
          Dev Unofficial - An unofficial DEV Community web
        </p>
        <p className="text-center mb-1">
          <span className="font-bold">Built on React</span> - A JavaScript
          library for building user interfaces
        </p>
        <p className="text-center">
          Also with <span className="font-bold">ExpressJS</span> - Fast,
          unopinionated, minimalist web framework for Node.js
        </p>
      </div>
    </div>
  );
};

export default Footer;
