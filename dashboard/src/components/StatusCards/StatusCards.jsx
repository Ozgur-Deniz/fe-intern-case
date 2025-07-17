import React from "react";
import StatusCard from "./StatusCard";
import statusDatas from "../../data/statusDatas";

function StatusCards() {
  return (
    <div className="flex 2xl:flex-row 2xl:w-[98%]  xxs:w-[90%] xxs:flex-col items-center justify-center gap-6">
      <div className="hidden max-lg:flex flex-col items-start justify-center w-full bg-[#ffffff] dark:bg-[#00044a] rounded-xl pl-6 pt-3 pb-3">
        <p className="font-cairo text-[22px] text-[#202020] dark:text-[#ffffff] font-semibold">
          Products
        </p>
        <p className="font-open text-[14px] text-[#878787] font-normal ">
          Manage Your Products
        </p>
      </div>
      {statusDatas.map((item) => {
        return <StatusCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default StatusCards;
