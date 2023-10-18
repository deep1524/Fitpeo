import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiHandsClappingFill } from "react-icons/pi";
function Header() {
  return (
    <div className="h-16 px-4 flex justify-between items-center ">
      <div className="flex items-center gap-1">
        <div>
          <p className=" font-bold text-sm sm:text-lg">Hello Deep </p>
        </div>
        <div>
          <PiHandsClappingFill />
        </div>
      </div>
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          className="text-sm focus:outline-none active:outline-none h-10 w-[12rem]  rounded-lg pl-11 px-4"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
