import React from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsSlashCircle } from "react-icons/bs";
import { IoMdHourglass } from "react-icons/io";

function Product({ item }) {
  const { name, category, transactionId, date, amount, type } = item;

  return (
    <div className="grid grid-cols-[250px_200px_150px_150px_200px_100px] items-center border-b-2 border-[#ececeb] dark:border-[#04062e] pb-4 w-[92%] max-2xl:w-[1030px]">
      <div className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4" />
        <div className="w-12 h-12 bg-[#c4c4c4] dark:bg-[#4f56d3] rounded-xl" />
        <div className="flex flex-col font-cairo">
          <p className="text-base font-bold text-[#161919] dark:text-white">{name}</p>
          <p className="text-sm text-[#B2B3B9]">{category}</p>
        </div>
      </div>
      <p className="text-base text-[#161919] dark:text-white font-open">{transactionId}</p>
      <p className="text-sm text-[#B2B3B9] font-open">{date}</p>
      <p className="text-base font-bold text-[#161919] dark:text-white font-cairo">{amount}</p>
      <div>
        {type === "completed" && (
          <div className="w-[140px] text-[#89D233] bg-[#f3faeb] p-2 rounded-lg flex items-center gap-2 font-poppins">
            <FaRegCircleCheck />
            <p>Completed</p>
          </div>
        )}
        {type === "pending" && (
          <div className="w-[140px] text-[#515161] bg-[#eeeeef] p-2 rounded-lg flex items-center gap-2 font-poppins">
            <IoMdHourglass />
            <p>Pending</p>
          </div>
        )}
        {type === "canceled" && (
          <div className="w-[140px] text-[#F27277] bg-[#fef1f1] p-2 rounded-lg flex items-center gap-2 font-poppins">
            <BsSlashCircle />
            <p>Canceled</p>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <HiOutlineDotsCircleHorizontal className="text-xl dark:text-white" />
      </div>
    </div>
  );
}

export default Product;
