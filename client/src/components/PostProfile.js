import React from "react";

const PostProfile = () => {
  return (
    <div className="p-3 bg-custom-gray rounded-md mt-5 lg:mt-0 flex flex-col ">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-md bg-black"></div>
        <p className="text-xl font-bold ml-3">Silverius Sony Lembang</p>
      </div>

      <button className="bg-indigo-700 hover:bg-indigo-800 p-2 rounded-md mt-5">
        Follow
      </button>

      <p className="font-bold mt-5">Joined</p>
      <p className="text-lg">14 Dec 2021</p>
    </div>
  );
};

export default PostProfile;
