import React from "react";
import { HiOutlineHeart, HiOutlineChatAlt } from "react-icons/hi";

const ContentPreview = () => {
  return (
    <div className="bg-custom-gray max-w-screen-sm py-2 px-3 my-3 rounded-md">
      <div className="flex items-center">
        <div className="w-7 h-7 rounded-full bg-white"></div>
        <div className="flex flex-col ml-2">
          <span className="text-sm">Sony Lembang</span>
          <span className="text-xs text-gray-400">29 Oct (10 hours ago)</span>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-xl font-bold">
          How to make good commit message on git
        </h1>
        {/* Tags */}
        <div className="flex flex-wrap my-2">
          <span className="text-sm text-gray-400 mr-2">#Javascript</span>
          <span className="text-sm text-gray-400 mr-2">#React</span>
          <span className="text-sm text-gray-400 mr-2">#Git</span>
        </div>

        <div className="flex justify-between mt-5 mb-3">
          <div className="flex  ">
            <div className="flex items-center mr-3">
              <HiOutlineHeart size={20} />
              <span className="text-sm ml-1">28</span>
            </div>

            <div className="flex items-center mr-3">
              <HiOutlineChatAlt size={20} />
              <span className="text-sm ml-1">39</span>
            </div>
          </div>

          <div>
            <button className="text-sm py-2 px-5 rounded-md bg-gray-400 text-gray-800">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
