import React from "react";
import { HiSearch } from "react-icons/hi";

const HeaderSearchBar = () => {
  return (
    <div className="hidden md:flex h-10 w-80 bg-custom-black rounded-md mx-3 justify-between items-center p-2">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-2 bg-transparent focus:outline-none text-white"
      />
      <HiSearch size={24} color="white" cursor="pointer" />
    </div>
  );
};

export default HeaderSearchBar;
