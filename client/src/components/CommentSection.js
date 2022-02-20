import React from "react";

const CommentSection = () => {
  return (
    <div className="my-5">
      <h1 className="text-xl font-bold">Comments</h1>
      <div className="flex mt-5">
        <div className="w-7 h-7 bg-white rounded-full cursor-pointer"></div>
        <textarea className="flex-1 ml-3 rounded-md bg-transparent border-2 border-gray-500 p-2" />
      </div>
    </div>
  );
};

export default CommentSection;
