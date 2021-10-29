import React, { useState } from "react";
import {
  HiMenu,
  HiOutlineBell,
  HiOutlineChat,
  HiOutlineSearch,
} from "react-icons/hi";
import HeaderSearchBar from "./HeaderSearchBar";
import LineSeparator from "./LineSeparator";

const Header = ({ setLeftMenuOpen }) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const handleDropdownShown = (e) => {
    setIsDropdownShown((prev) => !prev);
  };

  const handleOpenLeftMenu = (e) => {
    e.preventDefault();
    setLeftMenuOpen(true);
  };

  return (
    <>
      <div className="w-screen flex items-center bg-custom-gray h-14 px-3 py-2 sm:px-6 lg:px-24 justify-between fixed z-20 top-0">
        {/* Left Side */}
        <div className="flex items-center">
          <div className="mr-5 md:hidden hover:bg-gray-400 flex justify-center items-center w-10 h-10 cursor-pointer rounded-full transition-colors duration-500 ease-in-out ">
            <HiMenu
              color="white"
              size={28}
              className="md:hidden"
              onClick={handleOpenLeftMenu}
            />
          </div>
          <img src="/dev-ecosystem.png" alt="logo" className="h-10" />
          <HeaderSearchBar />
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <button className=" bg-indigo-600 px-3 py-1 mr-4 h-10 hidden md:block rounded-md  text-white">
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

          <div className="flex flex-col items-end relative">
            <div
              className="w-7 h-7 bg-white rounded-full cursor-pointer"
              onClick={handleDropdownShown}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`fixed ml-auto top-16 rounded-md bg-custom-gray w-64  p-3 right-0 mr-3 sm:mr-6 lg:mr-24 transform ${
          isDropdownShown
            ? "translate-y-0 opacity-100"
            : "-translate-y-96 opacity-0"
        } transition-all duration-200 ease-in-out`}
      >
        <div>
          <p className="text-white">Sony Lembang</p>
          <p className="text-gray-400">@yukiao</p>
        </div>
        <LineSeparator />
        <p className="text-white p-2 cursor-pointer hover:bg-custom-black hover:text-indigo-500 rounded-md">
          Dashboard
        </p>
        <p className="text-white p-2 cursor-pointer hover:bg-custom-black hover:text-indigo-500 rounded-md">
          Create Post
        </p>
        <p className="text-white p-2 cursor-pointer hover:bg-custom-black hover:text-indigo-500 rounded-md">
          Reading List
        </p>
        <p className="text-white p-2 cursor-pointer hover:bg-custom-black hover:text-indigo-500 rounded-md">
          Settings
        </p>
        <LineSeparator />
        <p className="text-white p-2 cursor-pointer hover:bg-custom-black hover:text-indigo-500 rounded-md">
          Sign Out
        </p>
      </div>
    </>
  );
};

export default Header;
