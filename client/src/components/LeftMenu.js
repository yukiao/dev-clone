import React from "react";
import { HiX } from "react-icons/hi";
import { FcFilingCabinet, FcHome, FcSurvey } from "react-icons/fc";

const LeftMenu = ({ leftMenuOpen, setLeftMenuOpen }) => {
  const handleLeftMenuClose = (e) => {
    e.preventDefault();
    setLeftMenuOpen(false);
  };

  return (
    <div className="relative ">
      <div
        className={`bg-gray-600 opacity-30 w-screen h-screen fixed z-30 top-0 bottom-0 right-0 left-0 ${
          leftMenuOpen ? "block" : "hidden"
        }`}
        onClick={handleLeftMenuClose}
      ></div>
      <div
        className={`bg-custom-black h-screen w-72 opacity-100 fixed z-30 top-0 overflow-y-auto  transform transition-transform duration-300 ease-in-out ${
          leftMenuOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b-2 h-14 border-custom-gray">
          <h1 className="text-white font-bold text-xl">Dev Clone</h1>
          <HiX color="white" size={28} onClick={handleLeftMenuClose} />
        </div>

        {/* Menu */}
        <div className="px-5">
          <div className="flex items-center p-3">
            <FcHome size={24} className="mr-3" />
            <span className="text-white font-bold"> Home</span>
          </div>

          <div className="flex items-center p-3">
            <FcFilingCabinet size={24} className="mr-3" />
            <span className="text-white font-bold">Reading List</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">Listing</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">Podcasts</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">Videos</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">Tags</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">FAQ</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">DEV Shop</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">Sponsors</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">About</span>
          </div>

          <div className="flex items-center p-3">
            <FcSurvey size={24} className="mr-3" />
            <span className="text-white font-bold">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
