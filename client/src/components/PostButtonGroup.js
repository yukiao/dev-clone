import React from "react";
import {
  HiOutlineBookmark,
  HiOutlineHeart,
  HiOutlineShare,
} from "react-icons/hi";

const PostButtonGroup = () => {
  return (
    <div className="flex items-center justify-evenly h-14 w-screen fixed bg-custom-gray bottom-0 border-custom-black border-t-2  rounded-t-md md:bg-custom-black md:flex-col  md:sticky md:top-14 md:h-screen px-3 md:w-80 md:mx-auto">
      <div className="flex md:flex-col justify-center items-center">
        <div className="hover:bg-red-200 rounded-full p-1 hover:text-red-500 text-white">
          <HiOutlineHeart size={28} cursor="pointer" />
        </div>
        <span className="ml-2 md:ml-0">11</span>
      </div>
      <div className="flex md:flex-col justify-center ">
        <div className="hover:bg-green-200 rounded-full p-1 hover:text-green-500 text-white">
          <HiOutlineShare size={28} cursor="pointer" />
        </div>
      </div>
      <div className="flex md:flex-col justify-center items-center">
        <div className="hover:bg-blue-200 rounded-full p-1 hover:text-blue-500 text-white">
          <HiOutlineBookmark size={28} cursor="pointer" />
        </div>
        <span className="ml-2 md:ml-0">11</span>
      </div>
    </div>
  );
};

export default PostButtonGroup;
