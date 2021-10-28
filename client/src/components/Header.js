import React from "react";
import {
  HiMenu,
  HiOutlineBell,
  HiOutlineChat,
  HiOutlineSearch,
} from "react-icons/hi";

const Header = () => {
  return (
    <div className="w-screen flex items-center bg-custom-gray h-14 px-3 py-2 sm:px-6 lg:px-24 justify-between">
      {/* Left Side */}
      <div>
        <div className="mr-5 md:hidden hover:bg-gray-400 p-1 cursor-pointer rounded-full transition-colors duration-500 ease-in-out ">
          <HiMenu color="white" size={28} className="md:hidden" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <button className=" bg-indigo-600 px-3 py-1 mr-4 hidden md:block rounded-md  text-white">
          Create Post
        </button>
        <div className="mr-4 md:hidden hover:bg-gray-400 p-1 cursor-pointer rounded-full transition-colors duration-500 ease-in-out ">
          <HiOutlineSearch size={28} color="white" />
        </div>

        <div className="mr-4  hover:bg-gray-400 p-1 cursor-pointer rounded-full transition-colors duration-500 ease-in-out ">
          <HiOutlineChat size={28} color="white" />
        </div>

        <div className="mr-4  hover:bg-gray-400 p-1 cursor-pointer rounded-full transition-colors duration-500 ease-in-out ">
          <HiOutlineBell size={28} color="white" />
        </div>
        <div className="w-7 h-7 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
