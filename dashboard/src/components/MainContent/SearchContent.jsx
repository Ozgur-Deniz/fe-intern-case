import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchContent() {
  return (
    <div className="flex flex-row items-center justify-center gap-3 max-xl:gap-1 border-[2px] border-[#ececeb] dark:border-[#b59fbd] rounded-md  w-[280px] max-xl:w-[150px] max-lg:w-[80px] max-md:w-[45px] max-sm:w-[30px] max-sm:py-[3px] px-3 max-xl:px-1 py-[5px]">
      <IoMdSearch className="text-3xl max-md:text-2xl max-sm:text-lg text-[#515161] dark:text-white " />
      <input
        type="text"
        className="max-md:hidden border-none outline-none focus:outline-none font-cairo font-normal text-sm w-[240px] max-xl:w-[100px] max-lg:w-[40px] dark:text-white dark:bg-[#00044a] "
        placeholder="Search Item..."
      />
    </div>
  );
}

export default SearchContent;
