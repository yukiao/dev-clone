import React from "react";

const ReadNextRecommendation = () => {
  return (
    <div className="flex items-center my-5 group cursor-pointer">
      <div className="w-8 h-8 bg-white rounded-full cursor-pointer"></div>
      <div className="ml-3 flex-1">
        <h1 className="text-xl font-bold group-hover:text-indigo-500">
          jQuery and You: Learning the Basics
        </h1>
        <div>
          <span className="text-gray-300 group-hover:text-indigo-500">
            rileydaviskatz -{" "}
          </span>
          <span className="text-gray-300 group-hover:text-indigo-500">
            Nov 2
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReadNextRecommendation;
