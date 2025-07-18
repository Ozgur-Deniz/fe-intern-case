import React from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";

function mainContentBtns() {
  return (
    <div className="flex  flex-row items-center justify-center gap-2">
      <div className="max-lg:hidden border-[2px] border-[#ececeb] dark:border-[#b59fbd] rounded-lg p-3 cursor-pointer">
        <LuRefreshCcw className="dark:text-white" />
      </div>
      <div className="max-lg:hidden border-[2px] border-[#ececeb] dark:border-[#b59fbd] rounded-lg p-3 cursor-pointer">
        <CiCalendar className="dark:text-white"/>
      </div>
      <div className="max-lg:hidden border-[2px] border-[#ececeb] dark:border-[#b59fbd] rounded-lg p-3 cursor-pointer">
        <MdSort className="dark:text-white"/>
      </div>
      <div className="border-[2px] border-[#ececeb] dark:border-[#b59fbd] rounded-lg p-3 max-md:p-2 max-sm:p-1 cursor-pointer">
        <BsThreeDotsVertical className="dark:text-white"/>
      </div>
      <button className="rounded-xl flex items-center justify-center gap-2 font-semibold font-cairo text-sm bg-[#4F56D3] p-3 max-md:p-2 max-sm:p-1 max-sm:text-xs text-[#EBF3EA] hover:text-[#4F56D3] hover:bg-[#ffffff] transition-colors duration-500 ease-out ">
        <IoAddCircleOutline className="text-xl text-[#CDFF65]" />
        <span>Add New Product</span>
      </button>
    </div>
  );
}

export default mainContentBtns;
