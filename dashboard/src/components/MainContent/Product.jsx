import React from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsSlashCircle } from "react-icons/bs";
import { IoMdHourglass } from "react-icons/io";

function Product({ item }) {
  const { name, category, transactionId, date, amount, type } = item;
  return (
    <div className="w-[95%] border-[#ececeb] border-b-2 pb-5 flex flex-row items-center justify-start gap-12 ">
      <div className="w-[250px] flex flex-row items-center justify-start gap-2">
        <input type="checkbox" name="" id="" className="w-4 h-4 bg-[#ffffff]" />
        <div className="w-12 h-12 bg-[#c4c4c4] rounded-xl "></div>
        <div className="flex flex-col items-start justify-center gap-0 font-cairo">
          <p className="text-base font-bold text-[#161919] ">{name}</p>
          <p className="text-sm font-normal text-[#B2B3B9] ">{category}</p>
        </div>
      </div>
      <p className="w-[180px] font-open font-normal text-base text-[#161919] ">
        {transactionId}
      </p>
      <p className="w-[180px] font-open font-normal text-base text-[#B2B3B9] ">
        {date}
      </p>
      <p className="w-[180px] font-cairo font-bold text-base text-[#161919] ">
        {amount}
      </p>
      {type === "completed" ? (
        <div className="w-[140px]  text-[#89D233] bg-[#f3faeb] p-1 rounded-lg ">
          <div className="flex flex-row items-center justify-center gap-2 py-2 ">
            <FaRegCircleCheck className="font-[20px] " />
            <p className="font-poppins">Completed</p>
          </div>
        </div>
      ) : type === "pending" ? (
        <div className="w-[140px]  text-[#515161] bg-[#eeeeef] p-1 rounded-lg ">
          <div className="flex flex-row items-center justify-center gap-2 py-2 ">
            <IoMdHourglass className="font-[20px] " />
            <p className="font-poppins">Pending</p>
          </div>
        </div>
      ) : type === "canceled" ? (
        <div className="w-[140px]  text-[#F27277] bg-[#fef1f1] p-1 rounded-lg ">
          <div className="flex flex-row items-center justify-center gap-2 py-2 ">
            <BsSlashCircle className="font-[20px] " />
            <p className="font-poppins">Canceled</p>
          </div>
        </div>
      ) : null}
      <HiOutlineDotsCircleHorizontal className="text-[26px] " />
    </div>
  );
}

export default Product;
