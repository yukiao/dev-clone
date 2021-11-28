import React from "react";
import {
  HiOutlineBookmark,
  HiOutlineHeart,
  HiOutlineShare,
} from "react-icons/hi";

const PostButtonGroup = () => {
  return (
    <div className="flex items-center justify-evenly h-14 w-screen fixed bg-custom-gray bottom-0 border-custom-black border-t-2 rounded-md">
      <div className="flex items-center">
        <div className="hover:bg-red-200 rounded-full p-1 hover:text-red-500 text-white">
          <HiOutlineHeart size={28} cursor="pointer" className="" />
        </div>
        <span className="ml-2">11</span>
      </div>
      <div className="flex ">
        <div className="hover:bg-green-200 rounded-full p-1 hover:text-green-500 text-white">
          <HiOutlineShare size={28} cursor="pointer" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="hover:bg-blue-200 rounded-full p-1 hover:text-blue-500 text-white">
          <HiOutlineBookmark size={28} cursor="pointer" />
        </div>
        <span className="ml-2">11</span>
      </div>
    </div>
  );
};

export default PostButtonGroup;
