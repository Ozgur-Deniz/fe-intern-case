import React from "react";
import { MdTrendingUp } from "react-icons/md";
import { MdTrendingDown } from "react-icons/md";

function StatusCard({ item }) {
  return (
    <div className="w-[224px] xxs:w-full bg-[#ffffff] dark:bg-[#00044a] rounded-xl flex flex-col items-start justify-center gap-1 pl-6 pt-3 pb-3">
      <p className="font-open text-[#878787] font-normal text-sm ">
        {item.label}
      </p>
      <h2 className="font-cairo text-[#161919] dark:text-[#ffffff] font-bold text-2xl ">
        {item.count}
      </h2>
      {item.status ? (
        <div className="flex flex-row items-center justify-center gap-2 text-[#89D233] font-bold text-[16px] font-cairo">
          <MdTrendingUp className="text-[20px] "/>
          <p>{item.ratio}</p>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-2 text-[#F27277] font-bold text-[16px] font-cairo ">
          <MdTrendingDown className="text-[20px] "/>
          <p>{item.ratio}</p>
        </div>
      )}
    </div>
  );
}

export default StatusCard;
