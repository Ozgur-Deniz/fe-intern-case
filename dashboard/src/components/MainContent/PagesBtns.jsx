import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function PagesBtns() {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <FaAngleLeft className="text-[#B2B3B9] " />
      <div className="flex flex-row items-center justify-center gap-2 cursor-pointer">
        <div className="w-[30px] h-[30px] rounded-lg border-[1px] border-[#ECECEB] text-center text-[#ffffff] bg-[#4f56d3] ">
          1
        </div>
        <div className="w-[30px] h-[30px] rounded-lg border-[1px] border-[#ECECEB] text-center text-[#B2B3B9] ">
          2
        </div>
        <div className="w-[30px] h-[30px] rounded-lg border-[1px] border-[#ECECEB] text-center text-[#B2B3B9] ">
          3
        </div>
        <div className="w-[30px] h-[30px] rounded-lg border-[1px] border-[#ECECEB] text-center text-[#B2B3B9] ">
          4
        </div>
        <div className="w-[30px] h-[30px] rounded-lg border-[1px] border-[#ECECEB] text-center text-[#B2B3B9] ">
          5
        </div>
      </div>
      <FaAngleRight className="text-[#B2B3B9] " />
    </div>
  );
}

export default PagesBtns;
