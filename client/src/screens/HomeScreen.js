import React, { useState } from "react";
import { FcFilingCabinet, FcHome, FcSurvey } from "react-icons/fc";
import ContentPreview from "../components/ContentPreview";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";

const HomeScreen = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <div>
      <Header setLeftMenuOpen={setLeftMenuOpen} />
      <LeftMenu leftMenuOpen={leftMenuOpen} setLeftMenuOpen={setLeftMenuOpen} />

      <div className="py-16">
        <div className="flex pt-5 w-full max-w-screen-xl mx-auto md:px-2 box-border ">
          <div className="hidden md:block w-72 ">
            <div className={`bg-custom-black h-screen pr-5 `}>
              {/* Menu */}
              <div>
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

          <div className="flex flex-col flex-1 max-w-screen-sm">
            <div>
              <span className="text-white mx-1 my-2 p-2 pt-0 font-bold text-lg">
                Feed
              </span>
              <span className="text-white mx-1 my-2 p-2 pt-0 font-bold text-lg">
                Latest
              </span>
              <span className="text-white mx-1 my-2 p-2 pt-0 font-bold text-lg">
                Top
              </span>
            </div>

            <div className="flex flex-col">
              <ContentPreview />
              <ContentPreview />
              <ContentPreview />
              <ContentPreview />
              <ContentPreview />
            </div>
          </div>

          <div className="hidden lg:block min-w-218px xl:w-full max-w-320px bg-custom-gray h-72 ml-5 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
