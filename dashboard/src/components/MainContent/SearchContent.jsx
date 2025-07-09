import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchContent() {
  return (
    <div className="flex flex-row items-center justify-center gap-3 border-[2px] border-[#ececeb] rounded-md  w-[280px] px-3 py-[5PX]">
      <IoMdSearch className="text-3xl text-[#515161] " />
      <input
        type="text"
        className="border-none outline-none focus:outline-none font-cairo font-normal text-sm w-[240px] "
        placeholder="Search Item..."
      />
    </div>
  );
}

export default SearchContent;
