import React from "react";
import ReadNextRecommendation from "./ReadNextRecommendation";

const ReadNext = () => {
  return (
    <div className="bg-custom-gray mt-5 p-3 pt-5 rounded-md">
      <h1 className="text-2xl font-bold">Read Next</h1>
      <ReadNextRecommendation />
      <ReadNextRecommendation />
      <ReadNextRecommendation />
      <ReadNextRecommendation />
    </div>
  );
};

export default ReadNext;
