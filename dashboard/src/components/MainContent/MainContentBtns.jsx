import React from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";

function mainContentBtns() {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="border-[2px] border-[#ececeb] rounded-lg p-3 cursor-pointer">
        <LuRefreshCcw />
      </div>
      <div className="border-[2px] border-[#ececeb] rounded-lg p-3 cursor-pointer">
        <CiCalendar />
      </div>
      <div className="border-[2px] border-[#ececeb] rounded-lg p-3 cursor-pointer">
        <MdSort />
      </div>
      <div className="border-[2px] border-[#ececeb] rounded-lg p-3 cursor-pointer">
        <BsThreeDotsVertical />
      </div>
      <button className="rounded-xl flex items-center justify-center gap-2 font-semibold font-cairo text-sm bg-[#4F56D3] p-3 text-[#EBF3EA] hover:text-[#4F56D3] hover:bg-[#ffffff] transition-colors duration-500 ease-out ">
        <IoAddCircleOutline className="text-xl text-[#CDFF65]" />
        <span>Add New Product</span>
      </button>
    </div>
  );
}

export default mainContentBtns;
